import { sanityClient } from "../../../lib/sanity.server";
import Layout from "../../../components/layout";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

licencedQuery = `*[_type == "beats" && slug.current == $licenced]{
	_id,
	_createdAt,
	title,
	alt,
	file{
	"url": asset -> url
  },
  producers[]-> {
	  name,
	  image{
	    "url": asset -> url
  	  },
  },
	coverArt{
	"url": asset -> url
  },
  emotion,
  nairaExclusivePrice,
  nairaLeasePrice,
  dollarExclusivePrice,
  dollarLeasePrice
}`

export default function licencedBeats() {

}

export async function getStaticPaths() {

}

export async function getStaticProps() {

}