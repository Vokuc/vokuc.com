import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Images from "../public/images/images";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
		Autoplay(),
	]);

	useEffect(() => {
		if (emblaApi) {
			// Embla API is ready
		}
	}, [emblaApi]);
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<div>
					Hi There! My name is{" "}
					<span className="text-black">Ukpai Chika Kalu</span> I am
					also known as
					<span className="text-black"> Vokuc</span>
					<br />
					<div className={`xl:flex mt-8 md:flex`}>
						{/* Embla js carousel viewPort */}
						<div className={`${utilStyles.embla} `} ref={emblaRef}>
							<div
								className={`${utilStyles.embla_container} flex m-2`}
							>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me1}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me2}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me3}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me4}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me5}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
								<div
									className={`${utilStyles.embla_slide} px-2`}
								>
									<Image
										src={Images.Me6}
										height={530}
										width={400}
										alt="photo of Chika"
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`${utilStyles.profImg} bg-blue-900 flex justify-center m-4 font-extrabold md:h-28  mx-2 rounded-lg p-8`}
						>
							I AM A MUSIC PRODUCER AND SOFTWARE ENGINEER.
						</div>
						<div className="flex flex-col justify-center mt-8 p-4 bg-gradient-to-r from-green-900 to-red-900  rounded-md">
							<span>
								Feel free to check out my music using any of the
								links
							</span>
							<br />
							<span>or</span>

							<Link href="/music">
								<a>
									<button
										className={`${utilStyles.button} mt-8 m-auto py-2 px-8 font-black`}
									>
										HERE
									</button>
								</a>
							</Link>
						</div>
						<div
							id="soft"
							className={`flex flex-col justify-center mt-8 bg-gradient-to-l from-black to-yellow-700 p-4 rounded-md`}
						>
							<div>
								Want to see the software engineering projects I
								have worked on{" "}
							</div>

							<Link href="/software-engineering">
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
				</div>
			</section>
		</Layout>
	);
}
