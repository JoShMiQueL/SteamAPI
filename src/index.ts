import axios, { AxiosResponse } from 'axios'
import { Friend, Friends } from './interfaces/Friends'
import { GlobalAchievement } from './interfaces/GlobalAchievement'
import { News } from './interfaces/News'
import { OwnedGames } from './interfaces/OwnedGames'
import { PlayerAchievements } from './interfaces/PlayerAchievements'
import { PlayerSummaries } from './interfaces/PlayerSummaries'
import * as RecentlyPlayedGames from './interfaces/RecentlyPlayedGames'
import { ResponseFormat } from './interfaces/ResponseFormat'
import { UserStats } from './interfaces/UserStats'
import * as AppDetails from './interfaces/AppDetails'

export class SteamAPI {
  private apiKey: string
  private endPoint: string = 'http://api.steampowered.com'
  private responseFormat: ResponseFormat['format']

  /**
   *
   * @param apiKey Your [Steam Api Key]{@link https://steamcommunity.com/dev/apikey}
   * @param responseFormat Format of the response. Default is 'json'
   */
  constructor(apiKey: string, responseFormat: ResponseFormat['format'] = 'json') {
    this.apiKey = apiKey
    this.responseFormat = responseFormat
  }

  /**
   *
   * @param appId AppID of the game you want the news of.
   */
  async GetAppDetails(appId: number): Promise<AppDetails.AppDetails> {
    const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      if (steamApiResponse.data[appId].data !== undefined) {
        return {
          statusCode: steamApiResponse.status,
          statusText: steamApiResponse.statusText,
          success: steamApiResponse.data[appId].success,
          data: steamApiResponse.data[appId].data
        }
      } else {
        return {
          statusCode: steamApiResponse.status,
          statusText: steamApiResponse.statusText,
          success: steamApiResponse.data[appId].success
        }
      }
    } catch (error) {
      console.log(error.response.config.url)
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param appId AppID of the game you want the news of.
   * @param count How many news enties you want to get returned.
   * @param maxlength Maximum length of each news entry.
   */
  async GetNewsForApp(appId: number, count: number = 3, maxlength: number = 300): Promise<News> {
    const url = `${this.endPoint}/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${count}&maxlength=${maxlength}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.appnews
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param gameId AppID of the game you want the news of.
   */
  async GetGlobalAchievementPercentagesForApp(gameId: number): Promise<GlobalAchievement> {
    const url = `${this.endPoint}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${gameId}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.achievementpercentages.achievements
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamIds Comma-delimited list of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested.
   */
  async GetPlayerSummaries(...steamIds: bigint[]): Promise<PlayerSummaries> {
    const url = `${this.endPoint}/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKey}&steamids=${steamIds}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.response.players
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamId 64 bit Steam ID to return friend list for.
   * @param relationship Relationship filter. Possibles values: all, friend.
   */
  async GetFriendList(steamId: bigint, relationship: Friend['relationship'] = 'friend'): Promise<Friends> {
    const url = `${this.endPoint}/ISteamUser/GetFriendList/v0001/?key=${this.apiKey}&steamid=${steamId}&relationship=${relationship}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.friendslist.friends
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamId 64 bit Steam ID to return friend list for.
   * @param appId The ID for the game you're requesting
   * @param language Language. If specified, it will return language data for the requested language.
   */
  async GetPlayerAchievements(steamId: bigint, appId: number, language: string = 'us'): Promise<PlayerAchievements> {
    const url = `${this.endPoint}/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${this.apiKey}&steamid=${steamId}&l=${language}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      delete steamApiResponse.data.playerstats.success
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.playerstats
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamId 64 bit Steam ID to return friend list for.
   * @param appId The ID for the game you're requesting
   * @param language Language. If specified, it will return language data for the requested language.
   */
  async GetUserStatsForGame(steamId: bigint, appId: number, language: string = 'us'): Promise<UserStats> {
    const url = `${this.endPoint}/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appId}&key=${this.apiKey}&steamid=${steamId}&l=${language}&format=${this.responseFormat}`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.playerstats
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamId The SteamID of the account.
   * @param includeAppInfo Include game name and logo information in the output. The default is to return appids only.
   * @param includePlayedFreeGames By default, free games like Team Fortress 2 are excluded (as technically everyone owns them). If include_played_free_games is set, they will be returned if the player has played them at some point. This is the same behavior as the games list on the Steam Community.
   * @param appidsFilter You can optionally filter the list to a set of appids.
   */
  async GetOwnedGames(steamId: bigint, includeAppInfo?: boolean, includePlayedFreeGames?: boolean, ...appidsFilter: number[]): Promise<OwnedGames> {
    let url: string = `${this.endPoint}/IPlayerService/GetOwnedGames/v0001/?&key=${this.apiKey}&steamid=${steamId}${
      includeAppInfo === true ? `&include_appinfo=1` : ''
    }${includePlayedFreeGames ? `&include_played_free_games=1` : ''}&format=${this.responseFormat}`
    appidsFilter ? appidsFilter.forEach((v, i) => (url = `${url}&appids_filter[${i}]=${v}`)) : ''
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.response
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }

  /**
   *
   * @param steamId The SteamID of the account.
   * @param count Optionally limit to a certain number of games (the number of games a person has played in the last 2 weeks is typically very small)
   */
  async GetRecentlyPlayedGames(steamId: bigint, count?: number): Promise<RecentlyPlayedGames.RecentlyPlayedGames> {
    const url = `${this.endPoint}/IPlayerService/GetRecentlyPlayedGames/v0001/?&key=${this.apiKey}&steamid=${steamId}${count && `&count=${count}`}&format=${
      this.responseFormat
    }`
    let steamApiResponse: AxiosResponse
    try {
      steamApiResponse = await axios.get(url)
      return {
        statusCode: steamApiResponse.status,
        statusText: steamApiResponse.statusText,
        data: steamApiResponse.data.response
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        statusText: error.response.statusText
      }
    }
  }
}
