const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

Client.use(require('klasa-dashboard-hooks'));
Client.defaultUserSchema.add('TODOs', 'any', { array: true });

const MarianneClient = new Client ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    fetchAllMembers: false,
    createPiecesFolders: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: true,
    dashboardHooks: {
        apiPrefix: '',
		port: 1123
    },
    pieceDefaults: {
		routes: {
			enabled: true,
			authenticated: false
		},
		middlewares: { enabled: false }
	},
    providers: { default: 'json' },
    presence: { activity: { name: 'Dorte', type: 'LISTENING' } },
    typing: false,
    owners: ['147800635046232064'],
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});
    
MarianneClient.login(process.env.TOKEN);