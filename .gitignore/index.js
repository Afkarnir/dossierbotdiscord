const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    console.log("Connectedç");
});

bot.login("NDY5NDk3NDg3NTk0NjE4ODgx.DjIvRQ.pOfXoSfcuMQpKFWkOtf0N9E4ujw");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des Commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Ping"){
        message.reply("PONG PD VA");
    }
});
