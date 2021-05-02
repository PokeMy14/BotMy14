// if you're using `dbd.js 2.2.6`, use the code below

module.exports = ({
    name: "invite",
    aliases: ['add'],
    description: "Invite My14 Bot to ur server?! wow!",
    usage: "",
    category: "utility",
    code: `$description[Click [here\\](https://discord.com/api/oauth2/authorize?client_id=838372109414563880&permissions=8&scope=bot) to invite me!]
    $color[RANDOM]`
})

// but if you're using the latest version of dbd.js (dbd.js@latest), use the code below
// remember to remove the `//` every line below then delete the code above

// module.exports = ({
//    name: "invite",
//    aliases: ['add'],
//    description: "Invite me to your server!",
//    usage: "",
//    category: "utility",
//    code: `$description[Click [here](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=3728207737) to invite me!]
//    $color[RANDOM]`
// })
