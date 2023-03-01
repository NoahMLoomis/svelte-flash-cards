// See https://kit.svelte.dev/docs/types#app

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit';
import type { Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | null
		}
		interface PageData {
			session: import("@supabase/supabase-js").Session | null
		}
		// interface Platform {}
		interface Supabase {
			// Use the path to where you generated the types using the Supbase CLI.
			Database: import('../types/supabase').Database;
			SchemaName: 'public'
		}

		// interface Locals {}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null
		}
	}
}

export { };
