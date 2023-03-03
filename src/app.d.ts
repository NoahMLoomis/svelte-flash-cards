// See https://kit.svelte.dev/docs/types#app

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit';
import type { Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | null
		}
		interface PageData {
			session: import("@supabase/supabase-js").Session | null
		}
		// interface Platform {}
		// interface Supabase {
		// 	// Use the path to where you generated the types using the Supbase CLI.
		// 	Database: import('../types/supabase').Database;
		// 	SchemaName: 'public'
		// }

		// interface Locals {}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null
		}
	}
}

export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[]

export interface Database {
	public: {
		Tables: {
			flashcard: {
				Row: {
					answer: string
					created_at: string | null
					hint: string | null
					id: number
					question: string
					quiz: number
					rating: number | null
				}
				Insert: {
					answer: string
					created_at?: string | null
					hint?: string | null
					id?: number
					question: string
					quiz: number
					rating?: number | null
				}
				Update: {
					answer?: string
					created_at?: string | null
					hint?: string | null
					id?: number
					question?: string
					quiz?: number
					rating?: number | null
				}
			}
			quiz: {
				Row: {
					created_at: string | null
					description: string | null
					id: number
					quiz: string
					subject: number
				}
				Insert: {
					created_at?: string | null
					description?: string | null
					id?: number
					quiz: string
					subject: number
				}
				Update: {
					created_at?: string | null
					description?: string | null
					id?: number
					quiz?: string
					subject?: number
				}
			}
			subject: {
				Row: {
					created_at: string | null
					description: string | null
					id: number
					subject: string
					user_id: string
				}
				Insert: {
					created_at?: string | null
					description?: string | null
					id?: number
					subject?: string
					user_id: string
				}
				Update: {
					created_at?: string | null
					description?: string | null
					id?: number
					subject?: string
					user_id?: string
				}
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}


export { };
