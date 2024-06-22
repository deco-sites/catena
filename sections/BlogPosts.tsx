import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";
import { useId } from "../sdk/useId.ts";

export interface CTA {
  text?: string;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  cta?: CTA;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto lg:py-14 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function BlogPosts({
  cta = { text: "Show more" },
  posts = [
    {
      slug: "/",
      title: "Title of blogpost #1",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #2",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #3",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #4",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #5",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #6",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #7",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #8",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #9",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #10",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #11",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #12",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/",
      title: "Title of blogpost #13",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
  ],
  pagination: {
    page = 0,
    perPage = 6,
  } = {},
}: Props) {
  const from = perPage * page;
  const to = perPage * (page + 1);

  // It's boring to generate ids. Let's autogen them
  const postList = useId();

  // Get the HTMX link for this section
  const fetchMoreLink = usePartialSection({
    mode: "append",
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page + 1 },
    },
  })["f-partial"];
  // Get the HTMX link for this section
  const prevLink = usePartialSection({
    mode: "append",
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page - 1 },
    },
  })["f-partial"];

  function calculateReadingTime(words: number): string {
    const wordsPerMinute = 250;
    const estimatedTimeMinutes = words / wordsPerMinute;

    const roundedReadingTime = Math.round(estimatedTimeMinutes);
    return `${roundedReadingTime} min`;
  }

  const ContainerComponent = page === 0 ? Container : Fragment;

  const numberPage = posts && posts?.length / perPage || 0;
  const arrayPage = Array.from({ length: numberPage }, (_, i) => i + 1)

  return (
    <div class="w-full h-full text-primary-content bg-neutral" id={postList}>
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-[1320px]">
        <div class="gap-8 flex flex-col px-4 md:grid-cols-2 py-32 font-thicccboi  bg-neutral w-full" >
          {posts.slice(from, to).map((post, index) => (
            <a
              href={`/blog/${post.slug}`}
              class={`"overflow-hidden border border-base-200 rounded-lg bg-base-100 flex flex-col md:gap-6 ${index % 2 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <Image
                width={330}
                height={186}
                class="object-fit w-full md:w-2/4"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class={`p-3 md:p-5 space-y-4 md:w-2/4 relative md:before:content-[''] md:before:w-16 md:before:h-16 md:before:bg-base-100 md:before:absolute md:before:top-7  ${index % 2 ? "md:before:-left-14" : "md:before:-right-14"} md:before:rotate-45 md:before:z-[-1] z-10`}>
                <div class="font-semibold text-secondary">
                  {calculateReadingTime(post.content.split(" ").length)}
                </div>

                <h3 class=" text-2xl font-bold">{post.title}</h3>
                <div class="flex flex-wrap gap-2">
                  {post.categories?.map((category) => (
                    <div class="badge badge-lg badge-primary text-secondary text-xs">
                      {category.name}
                    </div>
                  ))}
                </div>
                <p class="text-base">{post.excerpt}</p>
                <div class="flex flex-wrap gap-2">
                  <span>
                    {post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                      : ""}
                  </span>
                  <span>•</span>
                  <span>{post.authors[0]?.name}</span>
                </div>
              </div>
            </a >
          ))
          }
          {
            arrayPage.length > 0 && (
              <div class="flex flex-row gap-4">
                <div class="flex justify-center w-full" >
                  <button
                    hx-get={prevLink}
                    hx-swap="outerHTML"
                    hx-target={`#${postList}`}
                    aria-label={cta.text}
                    class="btn px-2 btn-secondary disabled:bg-secondary disabled:opacity-50"
                    disabled={page == 0}
                  >
                    <span class="inline [.htmx-request_&]:hidden">
                      <span class="flex transition rotate-90 ">
                        <svg
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                            fill="#fff"
                            stroke="#fff"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
                  </button>
                </div>
                <ul class="flex flex-row gap-2 justify-center items-center">
                  {arrayPage.map((index) =>
                    <li class={`${index == page + 1 ? "bg-transparent" : "bg-secondary"} font-bold text-lg h-max p-1 text-primary`}>
                      {index}
                    </li>)}
                </ul>
                <div class="flex justify-center w-full" >
                  <button
                    hx-get={fetchMoreLink}
                    hx-swap="outerHTML"
                    hx-target={`#${postList}`}
                    aria-label={cta.text}
                    class="btn px-2 btn-secondary disabled:bg-secondary disabled:opacity-50"
                    disabled={page == (arrayPage.length - 1)}
                  >
                    <span class="inline [.htmx-request_&]:hidden">
                      <span class="flex transition -rotate-90 ">
                        <svg
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                            fill="#fff"
                            stroke="#fff"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
                  </button>
                </div>
              </div >
            )
          }
        </div >
        <div class="w-full lg:w-80 px-2 h-screen bg-secondary">

        </div>

      </div>
    </div>

  );
}
