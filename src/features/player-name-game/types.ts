export type AlternativeOption = {
  key: number
  value: string
}

export type Question = {
  correctAnswerKey: number
  alternativeOptions: AlternativeOption[]
  image: string
}

export type PlayerImage = {
  small: string
  large: string
}

export type Player = {
  personId: number
  fullName: string
  score: number
  teamName: string
  points: number
  assists: number
  rebounds: number
  imageLinks: PlayerImage
}

export enum GameLevel {
  Easy = 'easy',
  Regular = 'regular',
  Hard = 'hard',
  Impossible = 'impossible',
}
