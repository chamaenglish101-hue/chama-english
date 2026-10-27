/**
 * Short instructions the app speaks out loud, outside the lesson sentences.
 *
 * Every lesson sentence comes from the lesson files. This list holds only what the
 * app itself says to run the drill — the prompt that tells the learner what to do.
 * Spoken with the same en-US voice as the exercises, so a person who cannot see the
 * screen can still follow along.
 */
export const AUDIO_PROMPTS = {
  chooseMeaning: "Listen and choose the correct meaning.",
  completeSentence: "Complete the sentence.",
  listenAgain: "Listen again.",
  repeatSentence: "Listen and repeat the sentence.",
  whichSentence: "Which sentence did you hear?",
} as const

export type AudioPromptId = keyof typeof AUDIO_PROMPTS
