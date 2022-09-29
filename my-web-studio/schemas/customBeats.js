export default {
	name: "customBeats",
	title: "Custom Beats",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			description: "clients name",
		},
		{
			name: "email",
			title: "Email",
			type: "string",
			description: "clients email",
		},
		{
			name: "phone",
			title: "Phone",
			type: "string",
			description: "clients phone number",
		},
		{
			name: "file",
			title: "File",
			type: "file",
			description: "reference file for the production",
		},
		{
			name: "date",
			title: "Date Needed",
			type: "string",
			description: "complete before",
		},
	],
};
