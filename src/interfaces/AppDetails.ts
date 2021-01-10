export interface AppDetails {
  statusCode: number
  statusText: string
  success?: boolean
  data?: Data
}

export interface Data {
  type: string
  name: string
  steam_appid: number
  required_age: number
  is_free: boolean
  controller_support: string
  dlc: number[]
  detailed_description: string
  about_the_game: string
  short_description: string
  supported_languages: string
  header_image: string
  website: string
  pc_requirements: Requirements
  mac_requirements: Requirements
  linux_requirements: Requirements
  developers: string[]
  publishers: string[]
  packages: number[]
  package_groups: PackageGroup[]
  platforms: Platforms
  metacritic: Metacritic
  categories: Category[]
  genres: Genre[]
  screenshots: Screenshot[]
  movies: Movie[]
  recommendations: Recommendations
  achievements: Achievements
  release_date: ReleaseDate
  support_info: SupportInfo
  background: string
  content_descriptors: ContentDescriptors
}

interface Achievements {
  total: number
  highlighted: Highlighted[]
}

interface Highlighted {
  name: string
  path: string
}

interface Category {
  id: number
  description: string
}

interface ContentDescriptors {
  ids: number[]
  notes: string
}

interface Genre {
  id: string
  description: string
}

interface Requirements {
  minimum: string
}

interface Metacritic {
  score: number
  url: string
}

interface Movie {
  id: number
  name: string
  thumbnail: string
  webm: Mp4
  mp4: Mp4
  highlight: boolean
}

interface Mp4 {
  '480': string
  max: string
}

interface PackageGroup {
  name: string
  title: string
  description: string
  selection_text: string
  save_text: string
  display_type: number
  is_recurring_subscription: string
  subs: Sub[]
}

interface Sub {
  packageid: number
  percent_savings_text: string
  percent_savings: number
  option_text: string
  option_description: string
  can_get_free_license: string
  is_free_license: boolean
  price_in_cents_with_discount: number
}

interface Platforms {
  windows: boolean
  mac: boolean
  linux: boolean
}

interface Recommendations {
  total: number
}

interface ReleaseDate {
  coming_soon: boolean
  date: string
}

interface Screenshot {
  id: number
  path_thumbnail: string
  path_full: string
}

interface SupportInfo {
  url: string
  email: string
}
