export interface RecentlyPlayedGames {
  statusCode: number
  statusText: string
  response?: Response
}

export interface Response {
  total_count: number
  games: Game[]
}

export interface Game {
  appid: number
  name: string
  playtime_2weeks: number
  playtime_forever: number
  img_icon_url: string
  img_logo_url: string
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
}
