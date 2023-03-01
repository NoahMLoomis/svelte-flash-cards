import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../sverdle/$types';

export const load: PageServerLoad = async (event) => {
    const session = await getServerSession(event)
    if (!session) {
        throw redirect(302, "/signup")
    }
    return {
        session
    };
};
