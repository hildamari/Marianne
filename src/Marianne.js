// const path = require('path');
// const { Client, SyncSQLiteProvider } = require('discord.js-commando');
// const Database = require('better-sqlite3');

// const client = new Client({
//     owner: '147800635046232064',
//     commandPrefix: process.env.PREFIX,
//     unknownCommandResponse: false,
//     disableEveryone: true,
//     invite: 'https://discord.gg/phsGJdh',
//     selfbot: false,
//     presence: {
//       status: 'online',
//       activity: {
//           name: '@Marianne help',
//           type: 'WATCHING'
//       }
//     }
// });

// const database = new Database(path.join(__dirname, 'data/databases/settings.sqlite3'));

// client.setProvider(new SyncSQLiteProvider(database));

// client.registry
//     .registerDefaultTypes()
//     .registerGroups([
//         ['3h', 'three houses commands'],
//         ['info', 'info commands'],
//         ['misc', 'misc commands'],
//         ['owner', 'owner commands']
//     ])
//     .registerDefaultGroups()
//     .registerDefaultCommands({
//         'help': true,
//         'prefix': true,
//         'ping': true,
//         'eval_': false,
//         'commandState': true
//       })
//     .registerCommandsIn(path.join(__dirname, 'commands'));

// client.on('ready', () => {
//     console.log('Logged in!');
// });
      
// client.on('error', console.error);
      
// client.login(process.env.TOKEN);

const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

new Client({
    fetchAllMembers: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: true,
    presence: { activity: { name: 'Dorte', type: 'LISTENING' } },
    typing: false,
    owners: ['147800635046232064'],
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login(process.env.TOKEN);