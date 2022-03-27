const Discord = require("discord.js");

require("dotenv/config"); // Grabs password from .env

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

/* Bot Login */
client.on("ready", () => {
    console.log("SWTV Bot is now logged in");
});

client.on("message", (msg) => {
    if (msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) {
        if (msg.content.toLowerCase() === "hello there") {
            msg.reply("General Kenobi");
        }
    }
});

client.login(process.env.TOKEN);
