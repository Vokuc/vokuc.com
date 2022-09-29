import { sanityClient } from "../../lib/sanity.server";
import Layout from "../../components/layout";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { usePreviewSubscription } from "../../lib/sanity";
import { useRouter } from "next/router";

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
	},
	tags,
	likes,
}`;

export default function Article({ data, preview }) {
	
	/* const { data: article } = usePreviewSubscription(articleQuery, {
		params: {slug: data.article?.slug.current},
		initialData: data,
		enabled: preview
	}) */
	const [likes, setLikes] = useState(data?.article?.likes);
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div> 
	}

	const addLike = async () => {
		const res = await fetch("/api/handle-likes", {
			method: "POST",
			body: JSON.stringify({ _id: article._id }),
		}).catch((error) => console.log(error));

		const data = await res.json;

		setLikes(data.likes);
	};

	const { article } = data;
	return (
		<Layout>
			<h1 className={`text-5xl my-4 mb-8 justify-center flex`}>
				{article.title}
			</h1>
			<article>
				<Image
					className="rounded-xl"
					alt=""
					src={article?.mainImage?.url}
					width={400}
					height={400}
				/>

				<section>
					<PortableText value={article?.content} />
				</section>
			</article>
			<div className="m-4 flex justify-between bg-slate-800 p-4 rounded">
				<div>
					<h1>TAGS</h1>
					{article?.tags?.map((tag) => (
						<p
							className="bg-gray-500 auto my-2 p-1 text-black font-black rounded-md w-28 flex "
							key={tag}
						>
							{" "}
							{tag}{" "}
						</p>
					))}
				</div>
				<div className="bg-blue-900 p-2 m-2">
					<h1 className="flex justify-center">Likes</h1>
					<button onClick={addLike} className="border-4 border-double">
						{likes}
						<FaHeart className="m-2 text-4xl text-red-500" />
					</button>
				</div>
			</div>
			<div className="m-4 bg-slate-800 p-4 rounded">
				<h2>AUTHORS</h2>
				<div className="">
					<Image
						alt=""
						width={70}
						height={70}
						src={article.authors[0].image.url}
						className="rounded-md"
					/>
					<h4>{article.authors[0].name}</h4>
				</div>
			</div>
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
	return { props: { data: { article }, preview: true } };
}
