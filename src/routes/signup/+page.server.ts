import type { Actions } from "./$types";

export const actions: Actions = {
    signup: async ({ request, locals }) => {
        const form = await request.formData();
        const { data, error: err } = await locals.sb

        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();
    }
};