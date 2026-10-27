/**
 * The ten practice questions of each lesson, looked up by lesson id.
 *
 * Lessons are written in blocks, so this index grows as content lands: a lesson
 * without questions yet simply returns nothing, and its page offers the reading
 * material instead of an empty drill. Nothing has to be edited to publish a new
 * block except adding its file here.
 */

import { A01_PRACTICE } from "#/data/practice/a01.ts"
import { A02_PRACTICE } from "#/data/practice/a02.ts"
import { A03_PRACTICE } from "#/data/practice/a03.ts"
import { A04_PRACTICE } from "#/data/practice/a04.ts"
import { A05_PRACTICE } from "#/data/practice/a05.ts"
import { A06_PRACTICE } from "#/data/practice/a06.ts"
import { A07_PRACTICE } from "#/data/practice/a07.ts"
import { A08_PRACTICE } from "#/data/practice/a08.ts"
import { A09_PRACTICE } from "#/data/practice/a09.ts"
import { A10_PRACTICE } from "#/data/practice/a10.ts"
import { A11_PRACTICE } from "#/data/practice/a11.ts"
import { A12_PRACTICE } from "#/data/practice/a12.ts"
import { A13_PRACTICE } from "#/data/practice/a13.ts"
import { A14_PRACTICE } from "#/data/practice/a14.ts"
import { A15_PRACTICE } from "#/data/practice/a15.ts"
import { A16_PRACTICE } from "#/data/practice/a16.ts"
import { A17_PRACTICE } from "#/data/practice/a17.ts"
import { A18_PRACTICE } from "#/data/practice/a18.ts"
import { A19_PRACTICE } from "#/data/practice/a19.ts"
import { A20_PRACTICE } from "#/data/practice/a20.ts"
import { A21_PRACTICE } from "#/data/practice/a21.ts"
import { A22_PRACTICE } from "#/data/practice/a22.ts"
import { A23_PRACTICE } from "#/data/practice/a23.ts"
import { A24_PRACTICE } from "#/data/practice/a24.ts"
import { A25_PRACTICE } from "#/data/practice/a25.ts"
import { A26_PRACTICE } from "#/data/practice/a26.ts"
import { A27_PRACTICE } from "#/data/practice/a27.ts"
import { A28_PRACTICE } from "#/data/practice/a28.ts"
import { A29_PRACTICE } from "#/data/practice/a29.ts"
import { A30_PRACTICE } from "#/data/practice/a30.ts"
import { A31_PRACTICE } from "#/data/practice/a31.ts"
import { A32_PRACTICE } from "#/data/practice/a32.ts"
import { A33_PRACTICE } from "#/data/practice/a33.ts"
import { A34_PRACTICE } from "#/data/practice/a34.ts"
import { A35_PRACTICE } from "#/data/practice/a35.ts"
import { A36_PRACTICE } from "#/data/practice/a36.ts"
import { A37_PRACTICE } from "#/data/practice/a37.ts"
import { A38_PRACTICE } from "#/data/practice/a38.ts"
import { A39_PRACTICE } from "#/data/practice/a39.ts"
import { A40_PRACTICE } from "#/data/practice/a40.ts"
import { A41_PRACTICE } from "#/data/practice/a41.ts"
import { A42_PRACTICE } from "#/data/practice/a42.ts"
import { A43_PRACTICE } from "#/data/practice/a43.ts"
import { A44_PRACTICE } from "#/data/practice/a44.ts"
import { A45_PRACTICE } from "#/data/practice/a45.ts"
import { A46_PRACTICE } from "#/data/practice/a46.ts"
import { A47_PRACTICE } from "#/data/practice/a47.ts"
import { A48_PRACTICE } from "#/data/practice/a48.ts"
import { A49_PRACTICE } from "#/data/practice/a49.ts"
import { A50_PRACTICE } from "#/data/practice/a50.ts"
import { A51_PRACTICE } from "#/data/practice/a51.ts"
import { A52_PRACTICE } from "#/data/practice/a52.ts"
import { A53_PRACTICE } from "#/data/practice/a53.ts"
import { A54_PRACTICE } from "#/data/practice/a54.ts"
import { A55_PRACTICE } from "#/data/practice/a55.ts"
import { A56_PRACTICE } from "#/data/practice/a56.ts"
import { A57_PRACTICE } from "#/data/practice/a57.ts"
import { A58_PRACTICE } from "#/data/practice/a58.ts"
import { A59_PRACTICE } from "#/data/practice/a59.ts"
import { A60_PRACTICE } from "#/data/practice/a60.ts"
import { A61_PRACTICE } from "#/data/practice/a61.ts"
import { A62_PRACTICE } from "#/data/practice/a62.ts"
import { A63_PRACTICE } from "#/data/practice/a63.ts"
import { A64_PRACTICE } from "#/data/practice/a64.ts"
import { A65_PRACTICE } from "#/data/practice/a65.ts"
import { A66_PRACTICE } from "#/data/practice/a66.ts"
import { A67_PRACTICE } from "#/data/practice/a67.ts"
import { A68_PRACTICE } from "#/data/practice/a68.ts"
import { A69_PRACTICE } from "#/data/practice/a69.ts"
import { A70_PRACTICE } from "#/data/practice/a70.ts"
import { B01_PRACTICE } from "#/data/practice/b01.ts"
import { B02_PRACTICE } from "#/data/practice/b02.ts"
import { B03_PRACTICE } from "#/data/practice/b03.ts"
import { B04_PRACTICE } from "#/data/practice/b04.ts"
import { B05_PRACTICE } from "#/data/practice/b05.ts"
import { B06_PRACTICE } from "#/data/practice/b06.ts"
import { B07_PRACTICE } from "#/data/practice/b07.ts"
import { B08_PRACTICE } from "#/data/practice/b08.ts"
import { B09_PRACTICE } from "#/data/practice/b09.ts"
import { B10_PRACTICE } from "#/data/practice/b10.ts"
import { B11_PRACTICE } from "#/data/practice/b11.ts"
import { B12_PRACTICE } from "#/data/practice/b12.ts"
import { B13_PRACTICE } from "#/data/practice/b13.ts"
import { B14_PRACTICE } from "#/data/practice/b14.ts"
import { B15_PRACTICE } from "#/data/practice/b15.ts"
import { B16_PRACTICE } from "#/data/practice/b16.ts"
import { B17_PRACTICE } from "#/data/practice/b17.ts"
import { B18_PRACTICE } from "#/data/practice/b18.ts"
import { B19_PRACTICE } from "#/data/practice/b19.ts"
import { B20_PRACTICE } from "#/data/practice/b20.ts"
import { I01_PRACTICE } from "#/data/practice/i01.ts"
import { I02_PRACTICE } from "#/data/practice/i02.ts"
import { I03_PRACTICE } from "#/data/practice/i03.ts"
import { I04_PRACTICE } from "#/data/practice/i04.ts"
import { I05_PRACTICE } from "#/data/practice/i05.ts"
import { I06_PRACTICE } from "#/data/practice/i06.ts"
import { I07_PRACTICE } from "#/data/practice/i07.ts"
import { I08_PRACTICE } from "#/data/practice/i08.ts"
import { I09_PRACTICE } from "#/data/practice/i09.ts"
import { I10_PRACTICE } from "#/data/practice/i10.ts"
import { I11_PRACTICE } from "#/data/practice/i11.ts"
import { I12_PRACTICE } from "#/data/practice/i12.ts"
import { I13_PRACTICE } from "#/data/practice/i13.ts"
import { I14_PRACTICE } from "#/data/practice/i14.ts"
import { I15_PRACTICE } from "#/data/practice/i15.ts"
import { I16_PRACTICE } from "#/data/practice/i16.ts"
import { I17_PRACTICE } from "#/data/practice/i17.ts"
import { I18_PRACTICE } from "#/data/practice/i18.ts"
import { I19_PRACTICE } from "#/data/practice/i19.ts"
import { I20_PRACTICE } from "#/data/practice/i20.ts"
import { I21_PRACTICE } from "#/data/practice/i21.ts"
import { I22_PRACTICE } from "#/data/practice/i22.ts"
import { I23_PRACTICE } from "#/data/practice/i23.ts"
import { I24_PRACTICE } from "#/data/practice/i24.ts"
import { I25_PRACTICE } from "#/data/practice/i25.ts"
import { I26_PRACTICE } from "#/data/practice/i26.ts"
import { I27_PRACTICE } from "#/data/practice/i27.ts"
import { I28_PRACTICE } from "#/data/practice/i28.ts"
import { I29_PRACTICE } from "#/data/practice/i29.ts"
import { I30_PRACTICE } from "#/data/practice/i30.ts"
import { I31_PRACTICE } from "#/data/practice/i31.ts"
import { I32_PRACTICE } from "#/data/practice/i32.ts"
import { I33_PRACTICE } from "#/data/practice/i33.ts"
import { I34_PRACTICE } from "#/data/practice/i34.ts"
import { I35_PRACTICE } from "#/data/practice/i35.ts"
import { I36_PRACTICE } from "#/data/practice/i36.ts"
import { I37_PRACTICE } from "#/data/practice/i37.ts"
import { I38_PRACTICE } from "#/data/practice/i38.ts"
import { I39_PRACTICE } from "#/data/practice/i39.ts"
import { I40_PRACTICE } from "#/data/practice/i40.ts"
import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Lessons whose ten questions are published. */
export const PRACTICE_LESSONS: LessonPracticeContent[] = [
  B01_PRACTICE,
  B02_PRACTICE,
  B03_PRACTICE,
  B04_PRACTICE,
  B05_PRACTICE,
  B06_PRACTICE,
  B07_PRACTICE,
  B08_PRACTICE,
  B09_PRACTICE,
  B10_PRACTICE,
  B11_PRACTICE,
  B12_PRACTICE,
  B13_PRACTICE,
  B14_PRACTICE,
  B15_PRACTICE,
  B16_PRACTICE,
  B17_PRACTICE,
  B18_PRACTICE,
  B19_PRACTICE,
  B20_PRACTICE,
  I01_PRACTICE,
  I02_PRACTICE,
  I03_PRACTICE,
  I04_PRACTICE,
  I05_PRACTICE,
  I06_PRACTICE,
  I07_PRACTICE,
  I08_PRACTICE,
  I09_PRACTICE,
  I10_PRACTICE,
  I11_PRACTICE,
  I12_PRACTICE,
  I13_PRACTICE,
  I14_PRACTICE,
  I15_PRACTICE,
  I16_PRACTICE,
  I17_PRACTICE,
  I18_PRACTICE,
  I19_PRACTICE,
  I20_PRACTICE,
  I21_PRACTICE,
  I22_PRACTICE,
  I23_PRACTICE,
  I24_PRACTICE,
  I25_PRACTICE,
  I26_PRACTICE,
  I27_PRACTICE,
  I28_PRACTICE,
  I29_PRACTICE,
  I30_PRACTICE,
  I31_PRACTICE,
  I32_PRACTICE,
  I33_PRACTICE,
  I34_PRACTICE,
  I35_PRACTICE,
  I36_PRACTICE,
  I37_PRACTICE,
  I38_PRACTICE,
  I39_PRACTICE,
  I40_PRACTICE,
  A01_PRACTICE,
  A02_PRACTICE,
  A03_PRACTICE,
  A04_PRACTICE,
  A05_PRACTICE,
  A06_PRACTICE,
  A07_PRACTICE,
  A08_PRACTICE,
  A09_PRACTICE,
  A10_PRACTICE,
  A11_PRACTICE,
  A12_PRACTICE,
  A13_PRACTICE,
  A14_PRACTICE,
  A15_PRACTICE,
  A16_PRACTICE,
  A17_PRACTICE,
  A18_PRACTICE,
  A19_PRACTICE,
  A20_PRACTICE,
  A21_PRACTICE,
  A22_PRACTICE,
  A23_PRACTICE,
  A24_PRACTICE,
  A25_PRACTICE,
  A26_PRACTICE,
  A27_PRACTICE,
  A28_PRACTICE,
  A29_PRACTICE,
  A30_PRACTICE,
  A31_PRACTICE,
  A32_PRACTICE,
  A33_PRACTICE,
  A34_PRACTICE,
  A35_PRACTICE,
  A36_PRACTICE,
  A37_PRACTICE,
  A38_PRACTICE,
  A39_PRACTICE,
  A40_PRACTICE,
  A41_PRACTICE,
  A42_PRACTICE,
  A43_PRACTICE,
  A44_PRACTICE,
  A45_PRACTICE,
  A46_PRACTICE,
  A47_PRACTICE,
  A48_PRACTICE,
  A49_PRACTICE,
  A50_PRACTICE,
  A51_PRACTICE,
  A52_PRACTICE,
  A53_PRACTICE,
  A54_PRACTICE,
  A55_PRACTICE,
  A56_PRACTICE,
  A57_PRACTICE,
  A58_PRACTICE,
  A59_PRACTICE,
  A60_PRACTICE,
  A61_PRACTICE,
  A62_PRACTICE,
  A63_PRACTICE,
  A64_PRACTICE,
  A65_PRACTICE,
  A66_PRACTICE,
  A67_PRACTICE,
  A68_PRACTICE,
  A69_PRACTICE,
  A70_PRACTICE,
]

const BY_ID = new Map(PRACTICE_LESSONS.map((lesson) => [lesson.id, lesson]))

/**
 * Questions of one lesson, copied and ready to render.
 *
 * The copy matters: a stored copy means one lesson's exercise list is never mutated
 * while another learner reads it.
 */
export function practiceFor(lessonId: string): LessonPracticeContent | null {
  const source = BY_ID.get(lessonId)
  if (!source) return null
  return structuredClone(source)
}

/** Whether a lesson already has its ten questions. */
export function hasPractice(lessonId: string): boolean {
  return BY_ID.has(lessonId)
}

/** Ids of the lessons with questions, for progress messages and dashboards. */
export function publishedLessonIds(): string[] {
  return PRACTICE_LESSONS.map((lesson) => lesson.id)
}
