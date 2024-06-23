import { AppContext } from "site/apps/site.ts";
import { getRecordsByPath } from "apps/blog/utils/records.ts";
import { BlogPost } from "apps/blog/types.ts";
import { RequestURLParam } from "apps/website/functions/requestToParam.ts";

const COLLECTION_PATH = "collections/blog/posts";
const ACCESSOR = "post";

export interface Props {
    count: number;
    page?: number;
}

/**
 * @title BlogPostSearch
 * @description Fetches a specific blog post page by its slug.
 *
 * @param props - Contains the slug of the blog post.
 * @param _req - The request object (unused).
 * @param ctx - The application context.
 * @returns A promise that resolves to the blog post or undefined if not found.
 */
export default async function BlogPostSearch(
    { count, page }: Props,
    req: Request,
    ctx: AppContext,
): Promise<BlogPost[] | null> {
    const posts = await getRecordsByPath<BlogPost>(
        ctx,
        COLLECTION_PATH,
        ACCESSOR,
    );

    const { url: baseUrl } = req;
    const url = new URL(baseUrl);

    console.log("search", url.searchParams.get("search"))

    const search = url.searchParams.get("search")?.toLocaleLowerCase()

    if (!search) {
        return null
    }

    const arrayPosts: BlogPost[] = [];

    posts.map((post) => {
        if (post.title.toLocaleLowerCase().includes(search)) {
            if (arrayPosts.findIndex((postBlog) => postBlog == post)) {
                arrayPosts.push(post)
            }
        }
    })

    const mostRecentPosts = arrayPosts.toSorted((a, b) => {
        if (!a.date && !b.date) {
            return 0; // If both posts don't have a date, consider them equal
        }
        if (!a.date) {
            return 1; // If post a doesn't have a date, put it after post b
        }
        if (!b.date) {
            return -1; // If post b doesn't have a date, put it after post a
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date in descending order
    });

    const pageN = page ?? 1;
    const startIndex = (pageN - 1) * count;
    const endIndex = startIndex + count;
    const paginatedPosts = mostRecentPosts.slice(startIndex, endIndex);

    if (!posts) {
        return null;
    }

    return paginatedPosts;
}
