import { AllFlowsPrecondition, PreconditionResult } from '@sapphire/framework';
import type { CommandInteraction, Message, Snowflake, ContextMenuCommandInteraction } from 'discord.js';
// import { envParseArray } from '#lib/env-parser';

// const OWNERS = envParseArray('OWNERS');
const OWNERS='147800635046232064';

export class UserPrecondition extends AllFlowsPrecondition {
	#message = 'This command can only be used by the owner.';

	public override chatInputRun(interaction: CommandInteraction) {
		return this.doOwnerCheck(interaction.user.id);
	}

	public override contextMenuRun(interaction: ContextMenuCommandInteraction): PreconditionResult {
		return this.doOwnerCheck(interaction.user.id);
	}

	public override messageRun(message: Message) {
		return this.doOwnerCheck(message.author.id);
	}

	private doOwnerCheck(userId: Snowflake) {
		return OWNERS.includes(userId) ? this.ok() : this.error({ message: this.#message });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}
