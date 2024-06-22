import { AppContext } from "site/apps/site.ts";
import { getRecordsByPath } from "apps/blog/utils/records.ts";
import { Category } from "apps/blog/types.ts";

const COLLECTION_PATH = "collections/blog/categories";
const ACCESSOR = "category";

export default async function CategoryList(
    _req: Request,
    ctx: AppContext,
): Promise<Category[] | null> {
    const categorys = await getRecordsByPath<Category>(
        ctx,
        COLLECTION_PATH,
        ACCESSOR,
    );

    return categorys;

}