import type { Actions } from './$types'
import { supabaseClient } from '$lib/db';

export const actions = {
    login: async (event) => {
        const data = await event.request.formData();
        const email = data.get('email')?.toString();
        const password = data.get('password')?.toString();
        if (email && password) {
            const res = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });
            return res.error ? { success: false } : { success: true }
        }
    },
    logout: async (_) => {
        const res = await supabaseClient.auth.signOut();
        return res.error ? { success: false } : { success: true }
    }
} satisfies Actions