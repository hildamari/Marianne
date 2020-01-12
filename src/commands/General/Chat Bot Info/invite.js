const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Displays the invite link of the bot, to invite it to your guild.'
        });
    }

    run(msg) {
        msg.send("To add me to your discord guild: <https://discordapp.com/oauth2/authorize?client_id=650566385881317376&scope=bot&permissions=322630>\nDon't be afraid to uncheck some permissions, I will let you know if you're trying to run a command without permissions.")
    }

}