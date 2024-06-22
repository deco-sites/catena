import { AppContext } from "site/apps/site.ts";
import { getRecordsByPath } from "apps/blog/utils/records.ts";
import { BlogPost } from "apps/blog/types.ts";

const COLLECTION_PATH = "collections/blog/posts";
const ACCESSOR = "post";

export interface Props {
    category?: string;
    count: number;
    page?: number;
    term?: string;
}

/**
 * @title BlogPostCategory
 * @description Fetches a specific blog post by its slug.
 *
 * Fetches a specific blog post by its slug.
 *
 * @param props - Contains the slug of the blog post.
 * @param _req - The request object (unused).
 * @param ctx - The application context.
 * @returns A promise that resolves to the blog post or undefined if not found.
 */
export default async function BlogPostCategory(
    props: Props,
    _req: Request,
    ctx: AppContext,
): Promise<BlogPost[] | null> {
    const posts = await getRecordsByPath<BlogPost>(
        ctx,
        COLLECTION_PATH,
        ACCESSOR,
    );

    const arrayPosts: BlogPost[] = props.category == undefined ? posts : []

    posts.map((post) => {
        post.categories.map((ctg) => {
            if (ctg.name == props.category) {
                arrayPosts.push(post)
            }
        })
    })

    const arrayTerm: BlogPost[] = props.term == undefined ? arrayPosts : []
    if (props.term != undefined) {
        arrayPosts.map((post) => {
            if (post.title.includes(props.term || ""))
                arrayTerm.push(post)
        })
    }

    const mostRecentPosts = arrayTerm.toSorted((a, b) => {
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

    const page = props.page ?? 1;
    const startIndex = (page - 1) * props.count;
    const endIndex = startIndex + props.count;
    const paginatedPosts = mostRecentPosts.slice(startIndex, endIndex);

    return paginatedPosts.length > 0 ? paginatedPosts : null;

}
