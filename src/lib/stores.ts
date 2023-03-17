import type { User } from '$lib/globals'
import { persisted } from 'svelte-local-storage-store'

export const user = persisted('user', undefined);
