const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const cards = require('./cardtexts.json');
const colors = require('colors');
const fs = require('fs');

fs.readdir('./commands', (err, files) => {
  for(let file of files) {
    // Add the file to the require() cache.
    const _ = require(`./commands/${file}`);
  }
});


client.on('error', console.error);
client.once('ready', () => {
  console.log('\nConnected to Discord!'.green);
});

client.on('message', (message) => {
  if(message.author.bot || !message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command.includes('/') || command.includes('\\')) return;

  if(fs.existsSync(`./commands/${command}.js`)) {
    try {
      const commandFile = require(`./commands/${command}.js`);

      commandFile.run(client, message, args);
    } catch(e) {
      console.error(e);
    }
  }
});

client.login(require('./auth.js').TOKEN);
