const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Gives the "Marianne Subscriber" role to those who want to be notified of new updates',
            extendedHelp: 'Use the command again to remove the role'
        });
    }

    run(msg) {
        if(msg.guild.id == 650595160849121300) {
            const marianneSubscriberRole = msg.guild.roles.find(roles => roles.name === "Marianne Subscriber");
            if(msg.member.roles.has(marianneSubscriberRole.id)) {
                msg.member.roles.remove(marianneSubscriberRole).catch(console.error);
                msg.channel.send("The `Marianne Subscriber` role has been removed.");
            } else {
                msg.member.roles.add(marianneSubscriberRole).catch(console.error);
                msg.channel.send("You've been given the `Marianne Subscriber` role!");
            }
        } else {
            msg.send(`You cannot use this command in this server. Please join the support server to obtain this role. https://discord.gg/WAVdN4E`)
        }
    }
};