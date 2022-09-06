import sanityClient from "@sanity/client";
const client = sanityClient({
	projectId: "",
	// Add your projectId dataset: '',
	// Add your dataset apiVersion: '2022-06-01',
	useCdn: true,
});

const episode = (props) => {
	return (
		<div>
			<h1>{props.episode.title}</h1>
			<h2> {props.episode.description} </h2>
			<p> {props.episode.summar} </p>
		</div>
	);
};

export async function getStaticPaths() {
	const pagedata = await client.fetch(
		`*[ _type == "episode"] {"slug": slug.current}`
	);
	const paths = pagedata.map((episode) => ({
		params: { slug: episode.slug },
	}));
	return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
	const slug = params.slug;
	const pagedata = await client.fetch(
		`*[ _type == "episode" && slug.current match $slug ] {...} [0],`,
		{ slug }
	);
	if (!pagedata) return { notFound: true };
	else return { props: { episode: pagedata } };
}
export default episode;
