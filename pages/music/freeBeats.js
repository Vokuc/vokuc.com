import Link from "next/link";
import Layout from "../../components/layout";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import beatStyle from "./beats.module.css";
import { useState } from "react";
import Image from "next/image";

const freeBeatsQuery = `*[_type == "beats" && type == "free"]{
    _id,
  coverArt {"url": asset -> url},
  emotion,
  file {"url": asset -> url},
  title,
  type,
  genre,
  producers[]->{name},
  alt
}`;

export default function FreeBeats({ freeBeats }) {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		e.preventDefault;
		setSearchInput(e.target.value);
	};

	return (
		<Layout>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Search here"
					onChange={handleChange}
					value={searchInput}
					className={`border px-2 p-2 w-3/4 rounded m-2 bg-gradient-to-b from-black to-slate-900`}
				/>
			</div>
			<div>
				<h1 className="text-3xl text-black font-black flex justify-center">
					FREE BEATS
				</h1>

				<ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
					{freeBeats.length &&
						freeBeats
							.filter((free) => {
								if (
									free.title
										.toLowerCase()
										.includes(searchInput.toLowerCase()) ||
									free?.genre
										?.toLowerCase()
										.includes(searchInput.toLowerCase())
								) {
									return free;
								}
							})
							.map((free) => (
								<li
									className={`${beatStyle.li} flex flex-col h-40 w-32 bg-black m-2 p-2 rounded-md`}
									key={free._id}
								>
									<Image
										alt={free.alt}
										src={free.coverArt.url}
										width={150}
										height={100}
									/>
									<audio controls>
										<source
											src={free.file.url}
											type="audio/mp3"
										/>
									</audio>
									<div className="flex flex-col bg-red-900 rounded p-1">
										<span className="">{free.title}</span>
										<span className="bg-blue-800 p-1 rounded">
											{free.producers[0].name}
										</span>
									</div>
								</li>
							))}
				</ul>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const freeBeats = await sanityClient.fetch(freeBeatsQuery);
	return { props: { freeBeats } };
}
