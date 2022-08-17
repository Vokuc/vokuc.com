export default {
	name: "eventInformation",
	type: "document",
	title: "Event Information",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Event name",
		},
		{
			name: "description",
			type: "text",
			title: "Description",
			description:
				"Describe your event for search engines and social media.",
		},
		{
			name: 'image',
			type: 'mainImage',
			title: 'Event image',
			description: 'The highest resolution'
		}
	],
};
