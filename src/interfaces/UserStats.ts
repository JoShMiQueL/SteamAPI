export interface UserStats {
  statusCode: number
  statusText: string
  data?: Playerstats
}

export interface Playerstats {
  steamID: string
  gameName: string
  stats: Stat[]
  achievements: Achievement[]
}

export interface Stat {
  name: string
  value: number
}

export interface Achievement {
  name: string
  achieved: number
}
