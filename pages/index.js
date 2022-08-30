import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Button from "../components/button";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi There, My name is{" "}
					<span className="text-white">Ukpai Chika Kalu</span> I am
					also known as
					<span className="text-white"> Vokuc</span>
					<br />
					<div className={`xl:flex mt-8`}>
						<Image
							src="/../public/images/meinwhite.jpg"
							className={utilStyles.Image}
							height={530}
							width={400}
							alt="photo of Chika"
						/>
						<div
							className={`bg-blue-900 m-4 font-extrabold mx-2 h-auto rounded-lg p-8`}
						>
							I AM A MUSIC PRODUCER AND SOFTWARE ENGINEER.
						</div>
					</div>
					<div>
						<div className="flex flex-col justify-center mt-8 p-4 bg-blue-900 rounded-md">
							<span>Feel free to check out my music</span>
							<Link href="/music/music">
								<a>
									<button
										className={`${utilStyles.button} mt-8 m-auto py-2 px-8 font-black`}
									>
										HERE
									</button>
								</a>
							</Link>
						</div>
						<div className="flex flex-col justify-center mt-8 p-4 bg-blue-900 rounded-md">
							<div>
								Want to see the software engineering projects I
								have worked on{" "}
							</div>

							<Link href="/software-engineering/software-engineering">
								<a>
									<button
										className={`${utilStyles.button} mt-8 py-2 px-8 font-black`}
									>
										HERE
									</button>
								</a>
							</Link>
						</div>
					</div>
				</p>
			</section>
		</Layout>
	);
}
