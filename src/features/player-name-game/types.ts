export type AlternativeOption = {
  key: number
  value: string
}

export type Question = {
  correctAnswerKey: number
  alternativeOptions: AlternativeOption[]
  image: string
}

export enum GameLevel {
  Easy = 'easy',
  Regular = 'regular',
  Hard = 'hard',
  Impossible = 'impossible',
}
