import Link from 'next/link';
import { getAllNodes } from 'next-mdx/server';

function BlogPage({ posts }) {
  return (
    <div className="site-container">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h2 className="text-xl font-bold">
                <Link href={post.url}>
                  <a>{post.frontMatter.title}</a>
                </Link>
                &nbsp;
                <span className="text-sm">{post.frontMatter.date}</span>
              </h2>
              <p>{post.frontMatter.excerpt}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post'),
    },
  };
}

export default BlogPage;
