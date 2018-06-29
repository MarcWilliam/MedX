import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
	HAS_LOGGED_IN = "hasLoggedIn";

	constructor(public storage: Storage) { }

	login(username: string): void {
		this.storage.set(this.HAS_LOGGED_IN, true);
		this.setUsername(username);
	}

	logout(): void {
		this.storage.remove(this.HAS_LOGGED_IN);
		this.storage.remove("username");
	}

	setUsername(username: string): void {
		this.storage.set("username", username);
	}

	getUsername(): Promise<string> {
		return this.storage.get("username").then(value => {
			return value;
		});
	}

	hasLoggedIn(): Promise<boolean> {
		return this.storage.get(this.HAS_LOGGED_IN).then(value => {
			return value === true;
		});
	}
}
