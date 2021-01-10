const { SteamAPI } = require('../dist/index.js')

const api = new SteamAPI('key')

const alberto = 76561198121306099n
const joshmiquel = 76561199122553751n

// api.GetNewsForApp(730).then((res) => console.log(res))
// api.GetGlobalAchievementPercentagesForApp(730).then((res) => console.log(res))
// api.GetPlayerSummaries(alberto, joshmiquel).then((res) => console.log(res))
// api.GetFriendList(alberto).then((res) => console.log(res))
// api.GetPlayerAchievements(alberto, 730).then((res) => console.log(res))
// api.GetUserStatsForGame(alberto, 730).then((res) => console.log(res))
// api.GetOwnedGames(alberto, null, null, 730, 1091500).then((res) => console.log(res))
// api.GetRecentlyPlayedGames(alberto).then((res) => console.log(res))
// api.GetAppDetails(730).then((res) => console.log(res))
