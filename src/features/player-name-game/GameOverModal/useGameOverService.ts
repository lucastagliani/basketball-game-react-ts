const gameOverSubtitules = [
  [
    'Were you actually trying to do it right?',
    'Uh, you are unlucky',
    'The odds said you would get at least one right, but...',
    'This is actually a hard score to get LOL',
  ],
  [
    'Yeah, maybe next time',
    'Maybe you should try an easier mode? If any...',
    'Think positively: it could be worse',
  ],
  ['Ok...', 'Has it been a long time you don`t watch NBA?'],
  ['Keep trying!', 'I bet next time you will score better!', 'You are what we call "average"'],
  ['Good stuff! You know what you are doing', 'Nicely done!', 'So close to the perfect score'],
  [
    '100%!',
    'Should you try a harder mode? If any...',
    'YOU 1 vs 0 MACHINE',
    'You were perfect!',
    'Are you the next GOAT?',
    'Do you work for NBA or something?',
    'Do you have a life besides basketball?',
  ],
]

const useGameOverService = () => {
  const getNumberWithinRange = (number: number, min: number, max: number) =>
    number > max ? max : number < min ? min : number

  const getRandomSubtitle = (subtitles: string[]): string =>
    subtitles[Math.floor(Math.random() * subtitles.length)]

  const getSubtitleByScore = (score: number): string => {
    const arrayPosition = getNumberWithinRange(score, 0, 5)
    return getRandomSubtitle(gameOverSubtitules[arrayPosition])
  }

  return { getSubtitleByScore }
}

export default useGameOverService
