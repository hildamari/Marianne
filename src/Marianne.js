const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

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
    // dashboardHooks: {
    //     apiPrefix: '',
	// 	port: 1123
    // },
    providers: { default: 'json' },
    presence: { activity: { name: 'Dorte', type: 'LISTENING' } },
    typing: false,
    owner: '147800635046232064',
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});
    
MarianneClient.login(process.env.TOKEN);