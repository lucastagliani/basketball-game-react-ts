export type AlternativeOption = {
  key: number
  value: string
}

export type Question = {
  correctAnswerKey: number
  alternativeOptions: AlternativeOption[]
  image: string
}
