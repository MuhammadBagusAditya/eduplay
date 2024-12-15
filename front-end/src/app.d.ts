// See https://svelte.dev/docs/kit/types#app.d.ts
import { type AuthModel } from 'pocketbase';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: AuthModel | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface FileChangeEvent extends Event<HTMLInputElement> {
		target: HTMLInputElement & { files: FileList | null };
	}

	type AlertMessage = {
		text: string;
		variant: 'primary' | 'destructive';
	};
}

export {};
