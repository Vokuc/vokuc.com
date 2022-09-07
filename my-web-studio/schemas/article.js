export default {
	name: "article",
	title: "Article",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		// Important! Document needs a slug for Next.js to query for.
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			title: "Main Image",
			name: "mainImage",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			title: "Content",
			name: "content",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
		{
			title: "Authors",
			name: "authors",
			type: "array",
			of: [{ type: "reference", to: [{ type: "person" }] }],
		},
		{
			title: "Tags",
			name: "tags",
			type: "array",
			of: [{ type: "string" }],
		},
	],
};
