export default {
	name: "beats",
	title: "Beats",
	type: "document",
	fields: [
		{
			title: "Beat Title",
			name: "title",
			type: "string",
		},
		/* {
			title: "Cover Art",
			name: "coverArt",
			type: "mainImage",
		}, */
		{
			title: "Cover Art",
			name: "coverArt",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "alt",
			type: "string",
			title: "Alternative text",
			description: "Important for SEO and accessiblity.",
			options: {
				isHighlighted: true,
			},
		},
		{
			title: "Mp3 File",
			name: "file",
			type: "file",
			description: "Upload beat here",
		},
		{
			title: "slug",
			name: "slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			title: "Genre",
			name: "genre",
			type: "string",
		},
		{
			title: "Sub Genre",
			name: "subGenre",
			type: "string",
		},
		{
			title: "Emotion",
			name: "emotion",
			type: "string",
		},
		{
			title: "Release Year",
			name: "releaseYear",
			type: "number",
		},
		{
			title: "Type",
			name: "type",
			type: "string",
		},
		{
			title: "Producers",
			name: "producers",
			type: "array",
			of: [{ type: "reference", to: [{ type: "person" }] }],
		},
		{
			title: "Naira Lease Price",
			name: "nairaLeasePrice",
			type: "number",
		},
		{
			title: "Dollar Lease Price",
			name: "dollarLeasePrice",
			type: "number",
		},
		{
			title: "Naira Exclusive Price",
			name: "nairaExclusivePrice",
			type: "number",
		},
		{
			title: "Dollar Exclusive Price",
			name: "dollarExclusivePrice",
			type: "number",
		},
		{
			title: "Likes",
			name: "likes",
			type: "number",
		},
	],
	initialValue: {
		likes: 0,
	},
};
