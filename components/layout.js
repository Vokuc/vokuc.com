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
	FaTiktok,
	FaTwitter,
} from "react-icons/fa";

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
									className={`font-bold items-center lg:mr-2 lg:h-screen flex lg:flex-col justify-between`}
								>
									<li className={styles.li}>
										<Link href="/software-engineering">
											<a>Software Engineering</a>
										</Link>
									</li>
									<li className={styles.li}>
										<Link href="/music">
											<a>Music</a>
										</Link>
									</li>
									<li className={styles.li}>
										<Link href="/blog">
											<a>Blog</a>
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
					<Link href="">
						<a className="">
							<FaSpotify />
						</a>
					</Link>

					<Link href="">
						<a>
							<FaTwitter />
						</a>
					</Link>
					<Link href="">
						<a>
							<FaFacebook />
						</a>
					</Link>
					<Link href="">
						<a>
							<FaInstagramSquare />
						</a>
					</Link>
					<Link href="">
						<a>
							<FaTiktok />
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
