const { Command, RichDisplay } = require('klasa');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Gives details on the available DLC for Fire Emblem Three Houses' });
    }

    async run(msg) {
        const wave1Embed = new MessageEmbed()
            .setTitle("Wave 1")
            .setDescription('Start the school year—and your great adventure—in style.')
            .setImage('https://i.imgur.com/BZ8FS0o.jpg')
            .addField('Release Date', 'July 26th, 2019');
        const wave2Embed = new MessageEmbed()
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
            .addField('Release Date', 'September 10th, 2019');
        const wave3Embed = new MessageEmbed()
            .setTitle("Wave 3")
            .setDescription(stripIndents`
            Enjoy additional quests, more units, and a new sauna.
            * Recruit Anna by completing a special quest
            * A new sauna and the ability to interact with animals can be earned through new quests
            * Maid and butler battalions
            * New types of attire for most students`)
            .setThumbnail('https://i.imgur.com/ZdN2fc7.jpg')
            .setImage('https://i.imgur.com/8eF37V6.jpg')
            .addField('Release Date', 'September 20th, 2019');
        const wave3Part2Embed = new MessageEmbed()
            .setTitle("Wave 3 Part 2")
            .setDescription(stripIndents`
            A new outfit just in time for the holidays: The Sothis Regalia.
            This update lets you equip Byleth with an outfit inspired by Sothis herself.`)
            .setThumbnail("https://i.imgur.com/7CopRth.jpg")
            .setImage("https://i.imgur.com/sOsNOWT.jpg")
            .addField("Release Date", "December 18th, 2019")
        const wave4Embed = new MessageEmbed()
            .setTitle("Wave 4")
            .setDescription("New story content, with additional playable characters, locations, and more—plus a free update—will be released by April 30, 2020.")
        const freeUpdateEmbed = new MessageEmbed()
            .setTitle("Free Update")
            .setDescription(stripIndents`
            The following features were also added to the game in a free update.
            * Save slots increased from 5 to 25
            * Battle appearance options
            * Jeritza joins your party in the Black Eagle: Crimson Flower path
            * Visit support for more details about this update.`)
            .setThumbnail("https://i.imgur.com/Xug1K08.jpg")
            .setImage("https://i.imgur.com/pHaan5R.jpg")
            .addField("Release Date", "September 20th, 2019")
        const dlcDisplay = new RichDisplay()
            .addPage(wave1Embed)
            .addPage(wave2Embed)
            .addPage(wave3Embed)
            .addPage(freeUpdateEmbed)
            .addPage(wave3Part2Embed)
            .addPage(wave4Embed)
            .run(await msg.send('Loading DLC...'));
    }

};