const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {
      var actvs = [
        `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
        `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`,
        `${prefix}yardım`
    ];

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING'});
    }, 15000);


      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');

    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
client.on('guildBanAdd' , (guild, user) => {
  let logkanalı = guild.channels.find('name', 'log-kanalı');
  if (!logkanalı) return;
  aramızakatılanlar.send('**Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş** :fist: :writing_hand:  :spy:' );
});
client.on('message', msg => {
if (msg.content.toLowerCase() === 'sa') {
  msg.reply('Aleyküm Selam Hoj Gelmişsen Ağam');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'günaydın') {
  msg.reply('Gunaydiin Seni kucuk or**pu');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'herkese günaydın') {
  msg.reply('Teldeki Güvercin,Yalıcdali Çapkın,Kaldırımda Baygın,Anana Günyadın');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'napionuz') {
  msg.reply('Seni:D');
};
})


client.on('message', msg => {
if (msg.content.toLowerCase() === 'ne yapıyorsunuz') {
  msg.reply('Seni:D');
};
})
client.on('message', msg => {
if (msg.content.toLowerCase() === 'napıyorsun') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'ne yapıyorsunuz') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'napıyorsun') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'napiyon') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'neyarpıyorsunuz') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'ne yapıyorsun') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'neyapıyorsun') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'ne yapiyon') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'neyapiyon') {
  msg.reply('Seni:D');
};
})

client.on('message', msg => {
if (msg.content.toLowerCase() === 'napion') {
  msg.reply('Seni:D');
};
})


exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: ${args[0]} tane mesaj silindi`)
  })
}


client.login(ayarlar.token);
