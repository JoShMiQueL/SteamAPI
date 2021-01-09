export interface GlobalAchievement {
  statusCode: number
  statusText: string
  achievementpercentages?: Achievementpercentages
}

interface Achievementpercentages {
  achievements: Achievement[]
}

interface Achievement {
  name: string
  percent: number
}
