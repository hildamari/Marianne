import '#lib/setup';
import { LogLevel } from '@sapphire/framework';
import { MarianneClient } from '#lib/MarianneClient';

const client = new MarianneClient({
	defaultPrefix: 'm?',
	regexPrefix: /^(hey +)?marianne[,! ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'GUILDS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS'
	],
	partials: ['CHANNEL'],
	loadMessageCommandListeners: true,
	presence: { activities: [{ name: 'Dorte', type: 'LISTENING' }] }
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();