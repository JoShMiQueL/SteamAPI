export interface PlayerSummaries {
  statusCode: number
  statusText: string
  data?: Response
}

interface Response {
  players: Player[]
}

interface Player {
  steamid: string
  communityvisibilitystate: number
  profilestate: number
  personaname: string
  profileurl: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  avatarhash: string
  personastate: number
  primaryclanid: string
  timecreated: number
  personastateflags: number
}
