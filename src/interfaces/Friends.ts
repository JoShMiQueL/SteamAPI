export interface Friends {
  statusCode: number
  statusText: string
  data?: Friendslist
}

interface Friendslist {
  friends: Friend[]
}

export interface Friend {
  steamid: string
  relationship: 'friend' | 'all'
  friend_since: number
}
