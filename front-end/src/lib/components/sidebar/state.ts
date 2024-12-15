import { writable, type Writable } from 'svelte/store';

export const isAppear: Writable<boolean> = writable(false);
