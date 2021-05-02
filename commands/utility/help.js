module.exports = ({
    name: "help",
    aliases: ['h', 'commands', 'cmds'],
    description: "Show the list of commands",
    usage: "",
    category: "utility",
    code:
    `
    $thumbnail[$userAvatar[$clientID]]
    $description[Do \`$getServerVar[prefix]command <command name>\` to get more information about a command!
🍕Utility:
\`\`\`
help
command
ping
setprefix
\`\`\`
🥇Leveling:
\`\`\`
leveling enable/disable (enabled by default)
levels
exp
expcooldown
\`\`\`
💰Economy:
\`\`\`
daily
work
beg
pay
balance
leaderboard
award (Bot Developer only)
\`\`\`
🔎Information:
\`\`\`
userinfo
channelinfo
roleinfo
serverinfo
botinfo
developerinfo
\`\`\`
🎧Music:
\`\`\`
play
stop
pause
resume
skip
skipto
queue
lyrics
volume
loopqueue
loopsong
nowplaying
\`\`\`
🎲Miscellaneous: 
\`\`\`
avatar
membercount
emojicount
poll
\`\`\`
If you memorized everything, you are a very intelligent My <3
]
$color=0x55d8d0`
    })
