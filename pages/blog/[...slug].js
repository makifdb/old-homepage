import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { useHydrate } from 'next-mdx/client';
import { mdxComponents } from '../../components/mdx-components';
import Footer from '../../components/footer';

export default function PostPage({ post }) {
	const content = useHydrate(post, {
		components: mdxComponents,
	});

	return (
		<div className="site-container">
			<article>
				<p className="text-center">{post.frontMatter.date}</p>
				<h1 className="text-5xl font-bold text-center mt-4 mb-10">
					{post.frontMatter.title}
				</h1>
				<div className="prose-xl">{content}</div>
			</article>
			<Footer />
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: await getMdxPaths('post'),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const post = await getMdxNode('post', context);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
		},
	};
}
