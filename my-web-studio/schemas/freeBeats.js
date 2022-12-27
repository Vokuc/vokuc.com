export default {
	name: "freeBeats",
	title: "Free Beats",
	type: "document",
	fields: [
		{
			title: "Beat Title",
			name: "title",
			type: "string",
		},
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
			title: "Likes",
			name: "likes",
			type: "number",
		},
	],
	initialValue: {
		likes: 0,
	},
};
