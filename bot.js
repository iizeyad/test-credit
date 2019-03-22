const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("503602013016293387")
setInterval(function() {
channel.send(`3bker 3bker 3bker 3bker 3bker`);
}, 30)
})

client.login(process.env.BOT_TOKEN);