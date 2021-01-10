export interface GlobalAchievement {
  statusCode: number
  statusText: string
  data?: Achievementpercentages
}

interface Achievementpercentages {
  achievements: Achievement[]
}

interface Achievement {
  name: string
  percent: number
}
