export interface Question {
  id: string
  type: "mcq" | "short"
  text: string
  options?: string[]
  correctAnswer?: number
  sampleAnswer?: string
}

export interface SkillConfig {
  skillId: string
  marks: number
  questionCount: number
}

export interface TestDetails {
  title: string
  subject: string
  teacher: string
  room: string
  duration: number
  description: string
  selectedSkills: SkillConfig[]
  shuffleQuestions: boolean
  shuffleOptions: boolean
  preventTabSwitch: boolean
}
