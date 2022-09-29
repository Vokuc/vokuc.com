// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import person from "./person";
import book from "./book";
import mainImage from "./mainImage";
import beats from "./beats";
import audio from "./audio";
import eventInformation from "./eventInformation";
import article from "./article";
import customBeats from "./customBeats";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		person,
		book,
		eventInformation,
		mainImage,
		beats,
		audio,
		article,
		customBeats,
	]),
});
