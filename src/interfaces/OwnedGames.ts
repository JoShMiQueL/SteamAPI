export interface OwnedGames {
  statusCode: number
  statusText: string
  data?: Response
}

export interface Response {
  game_count: number
  games: Game[]
}

export interface Game {
  appid: number
  playtime_forever: number
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
  playtime_2weeks?: number
}
