import { sanityClient } from "../../lib/sanity.server";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import Layout from "../../components/layout";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const articleQuery = `*[_type == "article" && slug.current == $post][0]{
	_id,
	slug,
	title,
	content,
	mainImage {
		"url": asset -> url
	},
	authors[]-> {
		name,
		image{
			"url": asset -> url
		}
	}
}`;

export default function OneRecipe({ data }) {
	const { article } = data;
	return (
		<Layout>
			<article>
				<Image alt=""/>
				<section>
					<PortableText 
						value={article.content}
					/>
				</section>
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await sanityClient.fetch(
		`*[_type == "article" && defined(slug.current)]{
			"params": {
				"post": slug.current
			}
		}`
	);
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { post } = params;
	const article = await sanityClient.fetch(articleQuery, { post });
	return { props: { data: { article } } };
}
