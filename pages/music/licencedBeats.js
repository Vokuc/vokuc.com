import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { sanityClient } from "../../lib/sanity.server";
import styles from "./beats.module.css";

const licencedQuery = `*[_type == "beats" && type == "licenced"]{
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
  dollarLeasePrice
}`;

export default function Licenced({ licenced }) {
	return (
		<Layout>
			<h1 className="flex justify-center text-black font-bold text-2xl my-2">
				LICENCED BEATS
			</h1>
			<ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
				{licenced.length &&
					licenced.map((beat) => (
						<li
							key={beat?._id}
							className={`${styles.li} p-2 flex rounded-md flex-col items-center justify-center bg-gradient-to-bl from-black mx-4 my-2`}
						>
							<Link href={`/`}>
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
										<span>DETAILS</span>
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
