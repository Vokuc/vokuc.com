import { sanityClient } from "../../../lib/sanity.server";
import Layout from "../../../components/layout";
import Image from "next/image";
import Button from "../../../components/button";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const licencedQuery = `*[type == "licenced" && slug.current == $licenced][0]{
	_id,
	_createdAt,
	title,
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
  dollarLeasePrice,
  likes,
}`;

export default function LicencedBeats({ data }) {
	const [likes, setLikes] = useState(data?.beat?.likes);
	
	const addLike = async () => {
		
		const res = await fetch("/api/handle-likes", {
			method: "POST",
			body: JSON.stringify({ _id: beat._id }),
			
		}).catch((error) => console.log(`this error: ${error} is annoying `));
		console.log(res)
		const data = await res.json();
		console.log(data)
		setLikes(data.likes);
	};
	
	const { beat } = data;
	return (
		<Layout>
			<div className="text-black font-bold">
				<div className="m-2 p-2 flex justify-between font-black text-2xl">
					<h1>{beat.title}</h1>{" "}
					<span className="text-base font-normal text-blue-900">
						produced by
					</span>{" "}
					<h2>{beat.producers[0].name}</h2>
				</div>
				<div className="flex lg:justify-between">
					<div className="m-2">
						<Image
							className="rounded-md"
							src={beat.coverArt.url}
							width={250}
							height={250}
							alt={beat.alt}
						/>
						<audio
							className="w-48 my-4"
							controls
							controlsList="nodownload"
						>
							<source
								src={beat?.file.url}
								type="audio/mp3"
							></source>
						</audio>
						<button onClick={addLike} className="text-3xl text-red-500 border-4 border-double border-red-700">
							{likes}
							<FaHeart className="m-4" />
						</button>
					</div>

					<div className="p-2 sm:flex sm:flex-col bg-red-500">
						<div>
							<p>Naira Lease Price: ₦{beat?.nairaLeasePrice} </p>
							<Link href="/payment">
								<a>
									<Button text="GET LICENCE" />
								</a>
							</Link>
						</div>
						<br />
						<div>
							<p>
								Dollar Lease Price: ${beat?.dollarLeasePrice}{" "}
							</p>
							<Button text="GET LICENCE" />
						</div>
						<br />
						<br />
						<div>
							<p>
								Naira Exclusive Price: ₦
								{beat?.nairaExclusivePrice}
							</p>
							<Button text="GET LICENCE" />
						</div>
						<br />
						<div>
							<p>
								Dollar Exclusive Price: $
								{beat?.dollarExclusivePrice}
							</p>
							<Button text="GET LICENCE" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await sanityClient.fetch(
		`*[_type == "beats" && defined(slug.current)]{
			"params": {
				"licenced": slug.current
			}
		}`
	);
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { licenced } = params;
	const beat = await sanityClient.fetch(licencedQuery, { licenced });
	return { props: { data: { beat } } };
}
