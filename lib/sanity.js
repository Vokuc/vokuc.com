// lib/sanity.js
import {
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
//import ImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity.server";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

/* export const PortableText = createPortableTextComponent({
	...config,
	serializers: {},
}); */
//const builder = ImageUrlBuilder(sanityClient);

//export const urlFor = (source) => builder.image(source);
