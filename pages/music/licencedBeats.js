import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { sanityClient } from "../../lib/sanity.server";
import styles from "./beats.module.css";
import { useState } from "react";

const licencedQuery = `*[_type == "beats" && type == "licenced"]{
	_id,
	_createdAt,
	title,
	slug,
	genre,
	alt,
	file{
		"url": asset -> url
  	},
  	producers[]-> {
	  	name,
	  	image{
	    	"url": asset -> url
  	  	},
  	},
	coverArt{
		"url": asset -> url
	},
  	emotion,
  	nairaExclusivePrice,
  	nairaLeasePrice,
  	dollarExclusivePrice,
  	dollarLeasePrice
}`;

export default function Licenced({ licenced }) {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		e.preventDefault;
		setSearchInput(e.target.value)
	}

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
			<h1 className="flex justify-center text-black font-bold text-2xl my-2">
				LICENCED BEATS
			</h1>
			<p className="p-2 text-black flex justify-center m-4">
				Click on any beat for details
			</p>
			<ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
				{licenced.length &&
					licenced.filter((beat) => {
						if (beat.title.toLowerCase().includes(searchInput.toLowerCase()) || beat.genre.toLowerCase().includes(searchInput.toLowerCase())) {
							return beat
						}
					}).map((beat) => (
						<li
							key={beat?._id}
							className={`${styles.li} p-2 flex rounded-md flex-col items-center justify-center bg-gradient-to-bl from-black mx-4 my-2`}
						>
							<Link href={`/music/licencedBeats/${beat.slug.current}`}>
								<a>
									<Image
										src={beat?.coverArt?.url}
										width={150}
										height={100}
										alt=""
										className="rounded-md"
									/>
									<audio controls controlsList="nodownload">
										<source
											src={beat?.file.url}
											type="audio/mp3"
										/>
									</audio>
									<span className="flex flex-col items-center">
										<span className="bg-gradient-to-tr p-1 rounded-md">
											{beat?.title}
										</span>
										<span>{beat?.producers[0].name}</span>
										<span>{`N${beat?.nairaLeasePrice}`}</span>
									</span>
								</a>
							</Link>
						</li>
					))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	const licenced = await sanityClient.fetch(licencedQuery);
	return {
		props: { licenced },
	};
}
