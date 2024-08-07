const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "2349066587690"],
global.ownername = process.env.OWNER_NAME || "Coder_dave",
global.ytname = "YT: king_dave"
global.socialm = "GitHub: okoid721"
global.location = "Nigeria"

global.botname = process.env.BOTNAME || "BOT",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "Coder_dave",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "Coder_dave",
//console view/theme
global.themeemoji = '🎶'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "ture", //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, king!* ',
    prem: '🍭 *Hey, this feature is reserved for premium users only*',
    admin: '🍭 *Hey, this feature is reserved for admins only*',
    botAdmin: '🍭 *Hey, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *Hey, this feature is reserved for the owner only*',
    group: '🍭 *Hey, this feature is exclusively for groups*',
    private: '🍭 *Hey, this feature is exclusively for private chats*',
    wait: '🍭 *Hey, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id || " ", // paste your session id here
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
