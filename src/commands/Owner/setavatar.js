const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Changes the avatar of the bot',
            permissionLevel: 9
        });
    }

    async run (msg) {

        try {
          await this.client.user.setAvatar('https://media.discordapp.net/attachments/614902147565486111/650938572706414612/Marianne_Maid.png?width=361&height=361');
          
          return msg.send({description: 'Avatar changed!'});
        } catch (err) {
          return console.error(err);
        }
      }
}