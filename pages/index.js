import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi There, Welcome to my website, My name is{" "}
					<span className="text-white">Ukpai Chika Kalu</span> I am
					also known as
					<span className="text-white"> Vokuc</span>, I am a music
					producer and software engineer. Feel free to check out my
					music<Link href="/pages/music">here</Link>, or some of the
					software engineering projects I am working on{" "}
					<Link href="/pages/software-engineering">here</Link>
				</p>
			</section>
		</Layout>
	);
}
