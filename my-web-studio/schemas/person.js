export default {
	title: "Person",
	name: "person",
	type: "document", //documents have a type "document"
	fields: [
		//fields of your document
		{
			title: "Name",
			name: "name",
			type: "string",
		},
		{
			title: "Image",
			name: "image",
			type: "image",
		},
		{
			title: "Real Name",
			name: "realName",
			type: "string",
		},
		{
			title: "Bio",
			name: "bio",
			type: "array",
			of: [
				{
					type: "block",
					title: "Block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
};
