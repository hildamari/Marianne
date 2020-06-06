const { Command, Timestamp } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Creates a reminder',
			usage: '<when:time> <text:string>',
			usageDelim: ', '
		});
	}

	async run(msg, [when, text]) {
		const timestamp = new Timestamp('HH:mm:ss on MM/DD/YYYY');
		// console.log(timestamp.display(when))
		// let now = Date.now()
		// let time = Date.UTC(when)
		// console.log(now + ", " + time)
		const reminder = await this.client.schedule.create('reminder', when, {
			data: {
				channel: msg.channel.id,
				user: msg.author.id,
				text
			}
		});
		return msg.sendMessage(`Ok, I created you a reminder with the id of \`${reminder.id}\` and the text of \`${text}\`. I'll remind you at ${timestamp.display(when)}`);
	}

};