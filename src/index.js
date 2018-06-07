const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const cards = require('./cardtexts.json');

const request = require('request');
const fs = require('fs');


client.on('error', (error) => {});
client.once('ready', () => {
  console.log('Connected to Discord!');
});

client.on('message', (message) => {
  if(message.author.bot || message.content.indexOf(config.prefix) !== 0) {
    return;
  }

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command.includes('/') || command.includes('\\')) {
    return;
  }

  if(fs.existsSync(`./commands/${command}.js`)) {
    try {
      const commandFile = require(`./commands/${command}.js`);

      commandFile.run(client, message, args);
    } catch(e) {}
  }
});

client.login(config.token);
