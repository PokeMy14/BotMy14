const dbd = require("dbd.js")

const bot = new dbd.Bot({
  mobile: true,
  token: "ODM4MzcyMTA5NDE0NTYzODgw.YI6I3w.3InPEbnltg5L19Bmdp_hSXCFVZ8",
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>']
})

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
})

bot.status({
    text: `in PokeMy14's Server!`, // put any text
    type: "CHATTING", // LISTENING, PLAYING, WATCHING, COMPETING
    status: "online", // online, dnd, idle, invisible
    time: 75 // amount of times where you can change the bot status (if have multiple statuses)
    })

    // FOR STREAMING STATUS USE THIS
    // bot.status({
    // text: "text", 
    // type: "STREAMING", 
    // url: "enter url/link"
    //   })
    // remove `//` in each side

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })

    bot.variables(require('./commands/vars.js'))

    bot.loadCommands('./commands')
