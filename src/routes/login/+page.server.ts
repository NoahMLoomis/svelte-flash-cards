import type { Actions } from './$types'
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect, type ServerLoad } from '@sveltejs/kit';

export const ssr = true
export const prerender = false

export const load: ServerLoad = (event) => {
    if (event.locals.session) {
        throw redirect(302, "/")
    }
}

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        const { error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string,
        })
        if (err) {
            if (err instanceof AuthApiError) {
                return fail(400, {
                    email: body.email as string,
                    error: "Invalid credentials",
                })
            }
            return fail(500, {
                message: "Server error. Try again later.",
            })
        }
        throw redirect(303, "/quiz")
    },
} satisfies Actions