import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals }) => {
    const { error: err } = await locals.sb.auth.signOut()
    if (err) {
        throw error(500, "Something went wrong in the server")
    }
    throw redirect(302, "/")
}