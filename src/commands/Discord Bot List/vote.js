const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Vote for Marianne on top.gg/Discord Bot List'
        });
    }

    run(msg) {
        msg.send(`Here is the link to vote for Marianne on top.gg/Discord Bot List: **https://top.gg/bot/650566385881317376/vote**. You can vote every 12 hours.`)
    }
    
};