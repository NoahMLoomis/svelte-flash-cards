import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const ssr = true
export const prerender = false

export const actions: Actions = {
    signup: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        const { error: err } = await locals.sb.auth.signUp({
            email: body.email as string,
            password: body.password as string,
        })
        if (err) {
            if (err instanceof AuthApiError) {
                return fail(400, {
                    email: body.email as string,
                    error: "Invalid email or password"
                })
            }
            return fail(500, {
                error: "Server error. Please try again later"
            })
        }

        throw redirect(302, "/quiz")

    }
};