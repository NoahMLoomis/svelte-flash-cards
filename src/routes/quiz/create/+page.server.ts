import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, parent }) => {
    await parent()
    const subjects = await locals.sb.from('subject').select("subject_name")
    return { subjects: subjects.data?.map(sub => sub.subject_name) }
};