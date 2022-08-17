export default {
	title: "Book",
	name: "book",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Cover",
			name: "cover",
			type: "image",
		},
		{
			title: "Authors",
			name: "authors",
			// Reference -> A way to point to another doc
			type: "array",
			// This doc is only allowed to point to a doc of type person,
			// We could list more types, but let's keep this simple:
			of: [{ type: "reference", to: [{ type: "person" }] }],
			// Above, we improved the Book-document type by
			// making the author-field an array of references:
		},
	],
}