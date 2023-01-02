import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {
	FaFacebook,
	FaInstagramSquare,
	FaHeart,
	FaSpotify,
	FaTwitter,
	FaGithub,
	FaLaptopCode,
	FaLaptop,
	FaMusic,
	FaBlog,
	FaQuestion
} from "react-icons/fa";
import AudioMack from "../public/images/AUDIOMACK.png";

const name = "Chika";
export const siteTitle = "vokuc.com";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link
					rel="icon"
					href="/images/vokuc_sound_logo.ico"
					type="image/icon"
				/>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<title>{siteTitle}</title>
			</Head>
			<div className={`lg:flex`}>
				<header className={`lg:flex lg:flex-col  items-baseline`}>
					{
						<div>
							<nav>
								<ul
									className={`font-bold items-center lg:mx-8 lg:h-screen flex lg:flex-col justify-between`}
								>
									<li className={styles.li}>
										<Link href="/software-engineering">
											<a><FaLaptop /></a>
										</Link>
									</li>
									<li className={styles.li}>
										<Link href="/music">
											<a><FaMusic/></a>
										</Link>
									</li>
									<li className={styles.li}>
										<Link href="/blog">
											<a><FaBlog/></a>
										</Link>
									</li>
									<li className={styles.li}>
										<Link href="/about">
											<a><FaQuestion/></a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					}
				</header>
				<main className={styles.main}>
					{children}
					{!home && (
						<div className={styles.backToHome}>
							<Link href="/">
								<a>← Back to home</a>
							</Link>
						</div>
					)}
				</main>

				<footer
					className={`${styles.footer} m-auto mt-3 flex lg:flex-col lg:h-screen items-center justify-between`}
				>
					<Link href="https://github.com/Vokuc">
						<a target="_blank">
							<FaGithub />
						</a>
					</Link>

					<Link href="https://open.spotify.com/artist/1vGY7mCoTfDQnH5nnyHowo?si=bnzPYWV_SKiZRpXM1tm2Og">
						<a target="_blank">
							<FaSpotify />
						</a>
					</Link>

					<Link href="https://twitter.com/vokuc_ukpai">
						<a target="_blank">
							<FaTwitter />
						</a>
					</Link>

					<Link href="https://www.facebook.com/valentine.ukpai/">
						<a target="_blank">
							<FaFacebook />
						</a>
					</Link>
					<Link href="https://www.instagram.com/vokuc_sound/">
						<a>
							<FaInstagramSquare />
						</a>
					</Link>
					<Link href="https://audiomack.com/vokuc">
						<a target="_blank">
							<Image
								width={45}
								height={30}
								alt="audiomackicon"
								src={AudioMack}
							/>
						</a>
					</Link>
				</footer>
			</div>
			<p className="flex justify-center">
				built with <FaHeart /> by Vokuc
			</p>
		</div>
	);
}
