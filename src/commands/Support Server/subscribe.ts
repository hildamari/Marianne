import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import type { Guild, Role } from 'discord.js';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'Subscribe',
	description: 'Gives the "Marianne Subscriber" role to those who want to be notified of new updates'
})
export class SubscribeCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(
		registry: ChatInputCommand.Registry
	  ) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
			  .setDMPermission(false),
	
		  {
			idHints: ['1014619040603447306'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        if(interaction.guild?.id == '650595160849121300') {
            const marianneSubscriberRole = interaction.guild?.roles.cache.find(roles => roles.name === "Marianne Subscriber") as Role;

            // if user has role
            // if user doesn't have role
            let guild = this.container.client.guilds.cache.get('907259574342537236') as Guild
            const member = await guild.members.fetch(interaction.user.id)
            const role = await guild.roles.fetch(marianneSubscriberRole.id)
            if(member.roles.cache.has(marianneSubscriberRole.id)) {
                await interaction.reply({ content: "The `Marianne Subscriber` role has been removed."})
            } else {
                member.roles.add(role as Role)
                await interaction.reply({ content: "The `Marianne Subscriber` role has been added."})
            }
            
        } else {
            await interaction.reply({ content: `You cannot use this command in this server. Please join the support server to obtain this role. https://discord.gg/WAVdN4E`})
        }
	}
}
