import { sanityClient /* previewClient */ } from "../../lib/sanity.server";

sanityClient.config({
	token: process.env.SANITY_WRITE_TOKEN,
});

export default async function likeButtonHandler(req, res) {
	const { _id } = JSON.parse(req.body);
	console.log(_id);

	const data = await sanityClient
		.patch(_id)
		.setIfMissing({ likes: 0 })
		.inc({ likes: 1 })
		.commit()
		.catch((error) => console.log(error));

	res.status(200).json({ likes: data.likes });
}
