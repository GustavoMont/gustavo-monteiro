import NotFoundPage from "@/app/not-found";
import { PostBanner } from "@/components/posts/PostBanner";
import { PostCard } from "@/components/posts/PostCard";
import { PostContenFormatter } from "@/components/posts/PostContentFormatter";
import { Divider } from "@/components/ui/Divider";
import post from "@/models/post";

type Params = Promise<{
  slug: string;
}>;

type Props = {
  params: Params;
};

export async function generateStaticParams() {
  const posts = await post.listPosts();
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const foundPost = await post.findBySlug(slug);

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

async function PostCarrousel({ slug }: { slug: string }) {
  const filteredPosts = await post.listPosts({ exclude: slug });

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
