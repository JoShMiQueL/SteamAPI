const { SteamAPI } = require('../dist/index.js')

const api = new SteamAPI('key')

const alberto = 76561198121306099n
const joshmiquel = 76561199122553751n

// api.GetNewsForApp(730).then((res) => console.log(res.appnews.newsitems))
// api.GetGlobalAchievementPercentagesForApp(730).then((res) => console.log(res.achievementpercentages.achievements[0].name))
// api.GetPlayerSummaries('json', 76561199122553751n).then((res) => console.log(res.response.players))
// api.GetFriendList(alberto).then((res) => console.log(res))
// api.GetPlayerAchievements(alberto, 730).then((res) => console.log(res))
// api.GetOwnedGames(alberto, null, null, 730, 1091500).then((res) => console.log(res))
// api.GetRecentlyPlayedGames(alberto).then((res) => console.log(res))
