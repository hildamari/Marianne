import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { EmbedBuilder } from 'discord.js';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { stripIndents } from 'common-tags';

@ApplyOptions<Command.Options>({
    name: 'DLC',
	description: 'Gives details on the available DLC'
})
export class DLCCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
          builder //
            .setName(this.name)
            .setDescription(this.description),
            {
                idHints: ['1014618869345829074'],
            }
        );
    }

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        const paginatedMessage = new PaginatedMessage({
            template: new EmbedBuilder()
        });

        paginatedMessage.addPageEmbed((buildWave1Embed) => {
            buildWave1Embed
            .setTitle("Wave 1")
            .setDescription('Start the school year—and your great adventure—in style.')
            .setImage('https://i.imgur.com/BZ8FS0o.jpg')
            .addFields({ name: 'Release Date', value: 'July 26th, 2019', inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.0.1', inline: false });

            return buildWave1Embed
        });

        paginatedMessage.addPageEmbed((buildWave2Embed) => {
            buildWave2Embed
            .setTitle("Wave 2")
            .setDescription(stripIndents`
            Dress for success, get new valuable items, and take on new challenges.
            * Five additional Auxiliary Battles
            * New Auxiliary Battle background music (can be selected in the Option Menu)
            * Four valuable items with stat boosts: Movement speed +2, Max. HP +7, Str +3, Spd +3
            * One new type of attire for most students
            * A pair of glasses for Byleth to wear.`)
            .setThumbnail('https://i.imgur.com/okbwIJI.jpg')
            .setImage('https://i.imgur.com/6eSlJoE.jpg')
            .addFields({ name: 'Release Date', value: 'September 10th, 2019', inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.0.2', inline: false });

            return buildWave2Embed
        });

        paginatedMessage.addPageEmbed((buildWave3Embed) => {
            buildWave3Embed
            .setTitle("Wave 3")
            .setDescription(stripIndents`
            Enjoy additional quests, more units, and a new sauna.
            * Recruit Anna by completing a special quest
            * A new sauna and the ability to interact with animals can be earned through new quests
            * Maid and butler battalions
            * New types of attire for most students`)
            .setThumbnail('https://i.imgur.com/ZdN2fc7.jpg')
            .setImage('https://i.imgur.com/8eF37V6.jpg')
            .addFields({ name: 'Release Date', value: 'November 8th, 2019', inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.1.0', inline: false });

            return buildWave3Embed
        });

        paginatedMessage.addPageEmbed((buildFreeUpdateEmbed) => {
            buildFreeUpdateEmbed
            .setTitle("Free Update")
            .setDescription(stripIndents`
            The following features were also added to the game in a free update.
            * Save slots increased from 5 to 25
            * Battle appearance options
            * Jeritza joins your party in the Black Eagle: Crimson Flower path
            * Visit support for more details about this update.`)
            .setThumbnail("https://i.imgur.com/Xug1K08.jpg")
            .setImage("https://i.imgur.com/pHaan5R.jpg")
            .addFields({ name: "Release Date", value: "November 8th, 2019", inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.1.0', inline: false });

            return buildFreeUpdateEmbed
        })

        paginatedMessage.addPageEmbed((buildWave3Part2Embed) => {
            buildWave3Part2Embed
            .setTitle("Wave 3 Part 2")
            .setDescription(stripIndents`
            A new outfit just in time for the holidays: The Sothis Regalia.
            This update lets you equip Byleth with an outfit inspired by Sothis herself.`)
            .setThumbnail("https://i.imgur.com/7CopRth.jpg")
            .setImage("https://i.imgur.com/sOsNOWT.jpg")
            .addFields({ name: "Release Date", value: "December 18th, 2019", inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.1.1', inline: false});

            return buildWave3Part2Embed
        });

        paginatedMessage.addPageEmbed((buildWave4Embed) => {
            buildWave4Embed
            .setTitle("Free Update")
            .setDescription(stripIndents`
            The following features were also added to the game in a free update.
            * Save slots increased from 5 to 25
            * Battle appearance options
            * Jeritza joins your party in the Black Eagle: Crimson Flower path
            * Visit support for more details about this update.`)
            .setThumbnail("https://i.imgur.com/Xug1K08.jpg")
            .setImage("https://i.imgur.com/pHaan5R.jpg")
            .addFields({ name: "Release Date", value: "November 8th, 2019", inline: false })
            .addFields({ name: 'Game Version', value: 'Ver 1.1.0', inline: false });

            return buildWave4Embed
        });

        return paginatedMessage.run(interaction);
    }
}