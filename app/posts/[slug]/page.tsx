import { Post } from "@/@types/post";
import NotFoundPage from "@/app/not-found";
import { PostBanner } from "@/components/posts/PostBanner";
import { PostCard } from "@/components/posts/PostCard";
import { PostContenFormatter } from "@/components/posts/PostContentFormatter";
import { Divider } from "@/components/ui/Divider";
import api from "@/infra/api";
import post from "@/models/post";
import { getTypeText } from "@/utils/post-type.utils";
import { Metadata } from "next";

type Params = Promise<{
  slug: string;
}>;

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const { data: post, statusCode } = await api.get<Post>(`/posts/${slug}`);

  if (statusCode !== 200) {
    return {
      title: "Oops, post não encontrado :/ - Gustavo Monteiro",
    };
  }

  return {
    title: `${post.title} - ${getTypeText(post.type)} por Gustavo Monteiro`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await post.listPosts();
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { data, statusCode } = await api.get<Post>(`/posts/${slug}`);

  if (statusCode !== 200) {
    return <NotFoundPage />;
  }

  return (
    <section>
      <PostBanner post={data} />
      <PostContenFormatter content={data.content} />
      <div className="my-4">
        <Divider />
      </div>
      <PostCarrousel slug={slug} />
    </section>
  );
}

async function PostCarrousel({ slug }: { slug: string }) {
  const { data: filteredPosts } = await api.get<Post[]>(
    `/posts?exclude=${slug}`,
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
