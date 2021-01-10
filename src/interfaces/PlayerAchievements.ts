export interface PlayerAchievements {
  statusCode: number
  statusText: string
  data?: Playerstats
}

export interface Playerstats {
  steamID: string
  gameName: string
  achievements: Achievement[]
  success: boolean
}

export interface Achievement {
  apiname: string
  achieved: number
  unlocktime: number
}
