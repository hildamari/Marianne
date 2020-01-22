const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'References the uno meme' });
    }

    run(msg) {
        const marianne = this.client.emojis.find(emoji => emoji.name === "Marianne");
        if(msg.guild.id == 649054519556308992) {
            if(msg.channel.id == 669560106614259722 || msg.channel.id == 649063924607614978) {
                const message = `${marianne} I don't have uno so go fuck off.`
                return msg.send(message);
            } else {
                msg.send("You cannot use this command in a non-nsfw channel! Please go to <#649063924607614978>")
            }
        } else {
            const message = `${marianne} I don't have uno so go fuck off.`
            return msg.send(message);
        }
    }

};