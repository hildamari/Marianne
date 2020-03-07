const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});
const DBL = require("dblapi.js");

Client.use(require('klasa-dashboard-hooks'));
Client.defaultUserSchema.add('TODOs', 'any', { array: true });
Client.defaultGuildSchema.add('minAccAge', 'integer', { default: 1800000 });

const MarianneClient = new Client ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    fetchAllMembers: false,
    createPiecesFolders: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: false,
    dashboardHooks: {
        apiPrefix: '',
        port: 1123
    },
    providers: { default: 'json' },
    presence: { activity: { name: 'Dorte', type: 'LISTENING' } },
    typing: false,
    owner: '147800635046232064',
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});
    
const dbl = new DBL(process.env.DBL_API, MarianneClient);

MarianneClient.on('ready', () => {
    setInterval(() => {
        dbl.postStats(MarianneClient.guilds.size);
    }, 1800000);
});
    
dbl.on('posted', () => {
    console.log('Server count posted!');
})

MarianneClient.login(process.env.TOKEN);