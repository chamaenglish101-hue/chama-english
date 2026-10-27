import { useSyncExternalStore } from "react"

import {
  CATALOG,
  LEVELS,
  type Level,
  type LessonMeta,
  lessonById,
} from "#/data/catalog.ts"
import { storyReadKey } from "#/data/stories/types.ts"

const STORAGE_KEY = "chama-english:state:v1"

export interface LessonProgress {
  completed: boolean
  score: number
  at: string
}

export interface QuizRecord {
  id: string
  level: Level
  correct: number
  total: number
  at: string
}

export interface Profile {
  name: string
  level: Level
  dailyGoal: number
}

export interface Settings {
  showTranslation: boolean
  celebration: boolean
  /** Chosen English voice, by `voiceURI`; empty means "pick the best one". */
  voiceURI: string
}

export interface AppState {
  profile: Profile
  lessons: Record<string, LessonProgress>
  quizzes: QuizRecord[]
  xp: number
  streak: number
  bestStreak: number
  lastStudyDay: string | null
  days: string[]
  bookmarks: string[]
  settings: Settings
  startedAt: string
}

export function defaultState(): AppState {
  return {
    profile: { name: "", level: "iniciante", dailyGoal: 15 },
    lessons: {},
    quizzes: [],
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastStudyDay: null,
    days: [],
    bookmarks: [],
    settings: { showTranslation: true, celebration: true, voiceURI: "" },
    startedAt: new Date().toISOString(),
  }
}

const INITIAL = defaultState()

let state: AppState = INITIAL
let loaded = false
const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function persist() {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage full or blocked: keep the session in memory */
  }
}

function read(): AppState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as Partial<AppState>
    const base = defaultState()
    return {
      ...base,
      ...parsed,
      profile: { ...base.profile, ...parsed.profile },
      settings: { ...base.settings, ...parsed.settings },
      lessons: parsed.lessons ?? {},
      quizzes: Array.isArray(parsed.quizzes) ? parsed.quizzes : [],
      days: Array.isArray(parsed.days) ? parsed.days : [],
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
    }
  } catch {
    return defaultState()
  }
}

export function getState(): AppState {
  if (!loaded && typeof window !== "undefined") {
    state = read()
    loaded = true
  }
  return state
}

function subscribe(listener: () => void) {
  if (!loaded && typeof window !== "undefined") {
    state = read()
    loaded = true
  }
  listeners.add(listener)
  if (listeners.size === 1 && typeof window !== "undefined") {
    window.addEventListener("storage", onStorage)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage)
    }
  }
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return
  state = read()
  emit()
}

function setState(next: AppState) {
  state = next
  loaded = true
  persist()
  emit()
}

export function update(mutator: (previous: AppState) => AppState) {
  setState(mutator(getState()))
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState, () => INITIAL)
}

export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}

/* ---------------------------------------------------------------- days/streak */

export function dayKey(date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function shiftDay(key: string, delta: number): string {
  const [year, month, day] = key.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  date.setDate(date.getDate() + delta)
  return dayKey(date)
}

/** Registers study activity for today and keeps the streak honest. */
function touchStreak(current: AppState): AppState {
  const today = dayKey()
  if (current.lastStudyDay === today) return current
  const streak =
    current.lastStudyDay === shiftDay(today, -1) ? current.streak + 1 : 1
  return {
    ...current,
    streak,
    bestStreak: Math.max(current.bestStreak, streak),
    lastStudyDay: today,
    days: [...current.days.filter((day) => day !== today), today].slice(-90),
  }
}

/** Streak as it should be shown today: lost automatically after a skipped day. */
export function currentStreak(appState: AppState): number {
  if (!appState.lastStudyDay) return 0
  const today = dayKey()
  if (appState.lastStudyDay === today) return appState.streak
  if (appState.lastStudyDay === shiftDay(today, -1)) return appState.streak
  return 0
}

export function studiedToday(appState: AppState): boolean {
  return appState.lastStudyDay === dayKey()
}

/* ------------------------------------------------------------------ mutations */

export function completeLesson(
  lessonId: string,
  correct: number,
  total: number,
): number {
  const meta = lessonById(lessonId)
  if (!meta) return 0
  const ratio = total > 0 ? correct / total : 0
  const previous = getState().lessons[lessonId]
  const gained = previous?.completed ? 5 : 15 + Math.round(ratio * 10)

  update((current) => {
    const withStreak = touchStreak(current)
    return {
      ...withStreak,
      xp: withStreak.xp + gained,
      lessons: {
        ...withStreak.lessons,
        [lessonId]: {
          completed: true,
          score: Math.max(Math.round(ratio * 100), previous?.score ?? 0),
          at: new Date().toISOString(),
        },
      },
    }
  })

  return gained
}

/**
 * Marks one story as read and pays the XP for it.
 *
 * Reading is the one activity in the app that has no score: finishing an episode
 * is the whole achievement, so the first time is worth more than a reread. The key
 * `story:<id>` keeps the reading room apart from the lesson keys.
 */
export function completeStory(storyId: string, episode: number): number {
  const key = storyReadKey(storyId)
  const previous = getState().lessons[key]
  const gained = previous?.completed ? 5 : 12 + Math.min(episode * 2, 12)

  update((current) => {
    const withStreak = touchStreak(current)
    return {
      ...withStreak,
      xp: withStreak.xp + gained,
      lessons: {
        ...withStreak.lessons,
        [key]: {
          completed: true,
          score: Math.max(previous?.score ?? 0, 100),
          at: new Date().toISOString(),
        },
      },
    }
  })

  return gained
}

export function recordQuiz(level: Level, correct: number, total: number) {
  update((current) => {
    const withStreak = touchStreak(current)
    return {
      ...withStreak,
      xp: withStreak.xp + correct * 6,
      quizzes: [
        {
          id: `${Date.now()}`,
          level,
          correct,
          total,
          at: new Date().toISOString(),
        },
        ...withStreak.quizzes,
      ].slice(0, 30),
    }
  })
}

export function toggleBookmark(lessonId: string) {
  update((current) => ({
    ...current,
    bookmarks: current.bookmarks.includes(lessonId)
      ? current.bookmarks.filter((id) => id !== lessonId)
      : [...current.bookmarks, lessonId],
  }))
}

export function saveProfile(patch: Partial<Profile>) {
  update((current) => ({
    ...current,
    profile: { ...current.profile, ...patch },
  }))
}

export function saveSettings(patch: Partial<Settings>) {
  update((current) => ({
    ...current,
    settings: { ...current.settings, ...patch },
  }))
}

/** Clears learning history but keeps name, level and preferences. */
export function resetProgress() {
  update((current) => ({
    ...defaultState(),
    profile: current.profile,
    settings: current.settings,
    startedAt: current.startedAt,
  }))
}

/** Removes every local record, including the profile. */
export function eraseEverything() {
  setState(defaultState())
}

/* ---------------------------------------------------------------------- stats */

export interface LevelStat {
  id: Level
  label: string
  total: number
  done: number
  percent: number
}

export interface Stats {
  total: number
  done: number
  percent: number
  xp: number
  level: number
  xpIntoLevel: number
  xpForNext: number
  streak: number
  bestStreak: number
  minutes: number
  bookmarks: number
  quizzesTaken: number
  bestQuizScore: number
  byLevel: LevelStat[]
  lastLesson: LessonMeta | undefined
}

export const XP_PER_LEVEL = 120

export function computeStats(appState: AppState): Stats {
  const byLevel: LevelStat[] = LEVELS.map((info) => {
    const lessons = CATALOG.filter((lesson) => lesson.level === info.id)
    const done = lessons.filter(
      (lesson) => appState.lessons[lesson.id]?.completed,
    )
    return {
      id: info.id,
      label: info.label,
      total: lessons.length,
      done: done.length,
      percent: lessons.length
        ? Math.round((done.length / lessons.length) * 100)
        : 0,
    }
  })

  const completed = CATALOG.filter(
    (lesson) => appState.lessons[lesson.id]?.completed,
  )
  const minutes = completed.reduce((sum, lesson) => sum + lesson.minutes, 0)
  const level = Math.floor(appState.xp / XP_PER_LEVEL) + 1
  const bestQuizScore = appState.quizzes.reduce(
    (best, quiz) =>
      quiz.total > 0
        ? Math.max(best, Math.round((quiz.correct / quiz.total) * 100))
        : best,
    0,
  )

  return {
    total: CATALOG.length,
    done: completed.length,
    percent: Math.round((completed.length / CATALOG.length) * 100),
    xp: appState.xp,
    level,
    xpIntoLevel: appState.xp % XP_PER_LEVEL,
    xpForNext: XP_PER_LEVEL,
    streak: currentStreak(appState),
    bestStreak: appState.bestStreak,
    minutes,
    bookmarks: appState.bookmarks.length,
    quizzesTaken: appState.quizzes.length,
    bestQuizScore,
    byLevel,
    lastLesson: completed.length ? completed[completed.length - 1] : undefined,
  }
}

/** Next lesson to study: after the last completed one, at the learner's level. */
export function nextLesson(
  appState: AppState,
  level?: Level,
): LessonMeta | undefined {
  const target = level ?? appState.profile.level
  const pool = CATALOG.filter((lesson) => lesson.level === target)
  const pending = pool.find((lesson) => !appState.lessons[lesson.id]?.completed)
  if (pending) return pending
  return (
    CATALOG.find((lesson) => !appState.lessons[lesson.id]?.completed) ??
    undefined
  )
}

export function firstLessonOf(level: Level): LessonMeta | undefined {
  return CATALOG.find((lesson) => lesson.level === level)
}

export function isCompleted(appState: AppState, lessonId: string): boolean {
  return appState.lessons[lessonId]?.completed ?? false
}

export function greetingFor(date = new Date()): string {
  const hour = date.getHours()
  if (hour < 12) return "Bom dia"
  if (hour < 18) return "Boa tarde"
  return "Boa noite"
}

export function formatMinutes(total: number): string {
  if (total < 60) return `${total} min`
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`
}
