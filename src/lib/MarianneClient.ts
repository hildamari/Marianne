import { SapphireClient } from "@sapphire/framework";

export class MarianneClient extends SapphireClient {
	public ownerID: string | undefined = undefined;
	private _version = [1, 0, 0];

    public get invite() {
		return `https://discord.com/oauth2/authorize?client_id=${this.user!.id}&permissions=2419379264&scope=bot%20applications.commands`;
	}

	public get version() {
		const versionStr = this._version.join('.');
		return versionStr;
	}
}

