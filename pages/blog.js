import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../lib/sanity.server";

const articleList = `*[_type == "article"]{
	_id,
	title,
	authors[]->{
	  name,
	  image{
	  "url": asset -> url
	  }
	},
	content,
	mainImage{
	  "url": asset -> url
	},
  }[0...5]`;

export default function Blog({ articles }) {
	console.log(articles);
	return (
		<Layout>
			<div>
				<ul>
					{articles.length &&
						articles.map((article) => <li key={article._id}></li>)}
				</ul>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const articles = await sanityClient.fetch(articleList);
	return {
		props: { articles },
	};
}
