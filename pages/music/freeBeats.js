import Link from "next/link";
import Layout from "../../components/layout";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";
import beatStyle from "./beats.module.css";
//import sanityClient from "@sanity/client";
//import Img from "next/image";
//import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const freeBeatsQuery = `*[_type == "beats" && type == "free"]{
    _id,
  coverArt {"url": asset -> url},
  emotion,
  file {"url": asset -> url},
  title,
  type,
  producers,
  alt
}`;

export default function freeBeats({ freeBeats }) {
	//const imageProps = useNextSanityImage(sanityClientt, freeBeats.coverArt);
	return (
		<Layout>
			<div>
				<h1 className="text-3xl text-black font-black flex justify-center">
					FREE BEATS
				</h1>

				<ul className="flex">
					{freeBeats?.length > 0 &&
						freeBeats.map((free) => (
							<li
								className={`${beatStyle.li} flex flex-col w-32 bg-black m-4 p-2 rounded-md`}
								key={free._id}
							>
								<Image
									alt={free.alt}
									src={free.coverArt.url}
									width={150}
									height={100}
								/>
								<audio controls>
									<source src={free.file.url} type="audio/mp3" />
								</audio>
								<div className="flex flex-col bg-red-900 m-2 p-2">
									<span>{free.producers}</span>
									<span>{free.title}</span>
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
