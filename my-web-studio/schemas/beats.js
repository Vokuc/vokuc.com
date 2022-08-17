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
		{
			title: "Cover Art",
			name: "coverArt",
			type: "mainImage",
		},
		{
			title: "Mp3 File",
			name: "file",
			type: "audio",
			description: 'Upload beat here'
		},
		{
			title: 'slug',
			name: 'slug',
			type: 'slug',
			options: {source: 'title'}
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
	],
};
