import NotFoundPage from "@/app/not-found";
import { PostBanner } from "@/components/posts/PostBanner";
import { PostCard } from "@/components/posts/PostCard";
import { PostContenFormatter } from "@/components/posts/PostContentFormatter";
import { Divider } from "@/components/ui/Divider";
import { dummyPosts } from "@/utils/dummy-posts.utils";

type Params = Promise<{
  slug: string;
}>;

type Props = {
  params: Params;
};

export async function generateStaticParams() {
  return dummyPosts.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const foundPost = dummyPosts.find(({ slug: postSlug }) => postSlug === slug);

  if (!foundPost) {
    return <NotFoundPage />;
  }

  return (
    <section>
      <PostBanner post={foundPost} />
      <PostContenFormatter content={foundPost.content} />
      <div className="my-4">
        <Divider />
      </div>
      <PostCarrousel slug={slug} />
    </section>
  );
}

function PostCarrousel({ slug }: { slug: string }) {
  const filteredPosts = dummyPosts.filter(
    ({ slug: postSlug }) => slug !== postSlug,
  );

  return (
    <div className="carousel carousel-start rounded-box max-w-full space-x-6 p-4">
      {filteredPosts.map((post) => (
        <div className="carousel-item max-w-80 lg:max-w-md" key={post.slug}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
