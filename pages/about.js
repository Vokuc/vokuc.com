import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { sanityClient, SanityClient } from "../lib/sanity.server";

const personQuery = `*[_type == "person"]{
	_id,
	image{
		"url": asset -> url
  	},
  	name,
  	realName,
	bio
}`;

export default function About({ people }) {
	return (
		<Layout>
			<div>
				<ul className="flex">
					{people.map((person) => (
						<Link key={person._id} href="">
							<a style={{ textDecoration: "none" }}>
								<li
									style={{ boxShadow: "inherit" }}
									className="flex hover:p-3 flex-col w-40 p-4 m-2  justify-center"
								>
									<Image
										className="rounded"
										alt={person.name}
										width={100}
										height={100}
										src={person?.image?.url}
									/>
									<p className="flex text-lg justify-center">
										{person?.name}
									</p>
									<p className="flex justify-center">{person?.bio[0]?.children[0]?.text}</p>
								</li>
							</a>
						</Link>
					))}
				</ul>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const people = await sanityClient.fetch(personQuery);

	return {
		props: { people },
	};
}
