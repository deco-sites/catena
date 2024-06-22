
import { getRecordsByPath } from "apps/utils/records.ts";
import { BlogPost } from "apps/blog/types.ts";

const COLLECTION_PATH = "collections/blog/posts";
const ACCESSOR = "post";

export interface Props {
    category: string;
}

/**
 * @title BlogPostItem
 * @description Fetches a specific blog post by its slug.
 *
 * Fetches a specific blog post by its slug.
 *
 * @param props - Contains the slug of the blog post.
 * @param _req - The request object (unused).
 * @param ctx - The application context.
 * @returns A promise that resolves to the blog post or undefined if not found.
 */
export default async function BlogPostItem(
    { category }: Props,
    _req: Request,
): Promise<BlogPost | null> {
    const posts = await getRecordsByPath<BlogPost>(
        COLLECTION_PATH,
        ACCESSOR,
    );

    return posts.find((post: BlogPost) => post.categories.find((catg) => catg.name === category)) || null;
}
