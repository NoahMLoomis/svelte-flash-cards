import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
export const prerender = true

export const actions: Actions = {
    signup: async ({ request, locals }) => {
        const form = await request.formData();
        const { data, error: err } = await locals.sb.auth.signUp({
            email: form.get("email") as string,
            password: form.get("password") as string,
        })
        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: "Invalid emial or password"
                })
            }
            return fail(500, {
                error: "Server error. Please try again later"
            })
        }

        throw redirect(302, "/")

    }
};