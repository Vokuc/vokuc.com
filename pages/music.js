import { sanityClient } from "../lib/sanity.server";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";

const musicQuery = `{
	"free": *[_type == "freeBeats"] | order(title) {
		_id,
		producers[]->{
	  		name,
	  		image{
	  			"url": asset -> url
			}
		},
  		title,
  		type,
  		file{
			"url": asset -> url
  		},
  		genre,
  		coverArt{
			"url": asset -> url
 	 	}
  	}[0...3],
  	"licenced": *[type == "licenced"] | order(title) {
		_id,
		producers[]->{
	  		name,
	  		image{
	  			"url": asset -> url
			}
		},
  		title,
 	 	type,
  		file{
			"url": asset -> url
  		},
  		genre,
  		coverArt{
			"url": asset -> url
  		}
  	}[0...3]
}`;

export default function Music({ beatsList }) {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState("");
	let [genre, setGenre] = useState("");
	const free = beatsList.free;
	const licenced = beatsList.licenced;

	return (
		<Layout>
			<div className="xl:flex md:flex">
				<div className="free bg-black p-2">
					<h1 className="p-2 text-xl">FREE BEATS</h1>
					<ul>
						{free.length &&
							free.map((free, index) => (
								<li
									key={index}
									className="m-2 flex justify-between bg-green-700 p-2 rounded"
								>
									<div className="">
										<Image
											src={free.coverArt.url}
											width={50}
											height={50}
											alt=""
										/>
										<p>{free.title}</p>
									</div>
									<div className="px-2">
										<audio
											className="w-48 h-8 bg-yellow-800 p-2 m-2 rounded"
											controls
											controlsList="nodownload"
										>
											<source
												src={free?.file?.url}
												type="audio/mp3"
											></source>
										</audio>
										<p>{free.producers[0].name}</p>
									</div>
								</li>
							))}
					</ul>
					<Link href="./music/freeBeats">
						<a
							style={{ textDecoration: "none" }}
							className="flex justify-center"
						>
							<button className="hover:bg-yellow-900 m-2 p-2 flex justify-center bg-yellow-700 rounded">
								SHOW MORE
							</button>
						</a>
					</Link>
				</div>
				<div></div>
				<div className="licenced bg-black p-2">
					<h1 className="p-2 text-xl">LICENCED BEATS</h1>
					<ul>
						{licenced.length &&
							licenced.map((licenced, index) => (
								<li
									key={index}
									className="m-2 flex justify-between bg-green-700 p-2 rounded"
								>
									<div className="">
										<Image
											src={licenced.coverArt.url}
											width={50}
											height={50}
											alt=""
										/>
										<p>{licenced.title}</p>
									</div>
									<div className="px-2">
										<audio
											className="w-48 h-8 bg-yellow-800 p-2 m-2 rounded"
											controls
											controlsList="nodownload"
										>
											<source
												src={licenced?.file?.url}
												type="audio/mp3"
											></source>
										</audio>
										<p>{licenced.producers[0].name}</p>
									</div>
								</li>
							))}
					</ul>
					<Link href="./music/licencedBeats">
						<a
							style={{ textDecoration: "none" }}
							className="flex justify-center"
						>
							<button className="hover:bg-yellow-900 m-2 p-2 flex justify-center bg-yellow-700 rounded">
								SHOW MORE
							</button>
						</a>
					</Link>
				</div>
			</div>
			<div className="p-2">
				<h1 className="text-xl text-black font-bold flex justify-center mt-4">
					NEED A CUSTOM BEAT ?
				</h1>
				<p className="text-black font-black flex justify-center">
					fill the form below
				</p>
				<form className="flex flex-col p-2 m-2">
					<label className="flex flex-col m-2 p-2">
						Name
						<input
							type="text"
							placeholder="please enter your name"
							className="p-2 bg-slate-600 rounded border border-black"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label className="flex flex-col m-2 p-2">
						Email
						<input
							type="email"
							placeholder="please enter your email address"
							className="p-2 bg-slate-600 rounded border border-black"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label className="flex flex-col m-2 p-2">
						Phone
						<input
							type="text"
							placeholder="please enter your phone number"
							className="p-2 bg-slate-600 rounded border border-black"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</label>
					<label className="flex flex-col m-2 p-2">
						Audio Recording
						<input
							type="file"
							className="p-2 bg-slate-600 rounded border border-black"
						/>
					</label>
					<label className="flex flex-col m-2 p-2">
						Genre
						<input
							type="text"
							placeholder="please enter the genre"
							className="p-2 bg-slate-600 rounded border border-black"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						/>
					</label>
					<div className="flex justify-center">
						<Link href="/payment">
							<a>
								<button
									type="submit"
									className="rounded hover:bg-emerald-900 bg-yellow-800 w-32 m-2 p-2"
								>
									PAY
								</button>
							</a>
						</Link>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const beatsList = await sanityClient.fetch(musicQuery);

	return {
		props: { beatsList },
	};
}
