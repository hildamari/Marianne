import '#lib/setup';
import { LogLevel } from '@sapphire/framework';
import { MarianneClient } from '#lib/MarianneClient';
import { ActivityType } from 'discord.js';

const client = new MarianneClient({
	defaultPrefix: 'm?',
	regexPrefix: /^(hey +)?marianne[,! ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'Guilds',
		'GuildMessages',
		'GuildMessageReactions'
	],
	loadMessageCommandListeners: true,
	presence: { activities: [{ name: 'Dorte', type: ActivityType.Listening }] },
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