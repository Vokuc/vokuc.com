import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../lib/sanity.server";

import { useState } from "react";

const articleList = `*[_type == "article"]{
	_id,
	title,
	slug,
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
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	return (
		<Layout>
			<div className="flex justify-end">
				<input
					type="text"
					placeholder="Search here"
					onChange={handleChange}
					value={searchInput}
					className={`border px-2 p-2 rounded m-2 bg-gradient-to-b from-black to-slate-900`}
				/>
			</div>
			<div>
				<ul>
					{articles.length &&
						articles
							.filter((article) => {
								if (
									article.title
										.toLowerCase()
										.includes(searchInput.toLowerCase())
								) {
									return article;
								}
							})
							.map((article) => (
								<li
									key={article._id}
									className=" bg-gradient-to-b from-black to-slate-900 p-4 m-2 rounded-md"
								>
									<div>
										<Image
											src={article.mainImage.url}
											width={100}
											height={100}
											alt=""
										/>
										<h1 className="text-red-900 font-black text-xl mb-2">
											{article.title}
										</h1>
									</div>
									<p>{article.content[1].children[0].text}</p>
									<span className="flex justify-center">
										<Link href={`/blog/${article.slug.current}`}>
											<a>
												<button className="bg-green-700 hover:bg-green-500 p-2 m-2 text-black font-bold rounded">
													READ MORE
												</button>
											</a>
										</Link>
									</span>
								</li>
							))}
				</ul>
				<div className="flex justify-center">
					<button className="m-2 p-2 bg-black rounded-md hover:bg-slate-900">
						SEE ALL BLOG POSTS
					</button>
				</div>
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
