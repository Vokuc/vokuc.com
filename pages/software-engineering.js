import { sanityClient } from "../lib/sanity.server";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { useState, useEffect } from "react";

export default function Software() {
	useEffect(() => {
		fetch("http://cpvapi.com/pens/public/vokuc")
	})
	return (
		<Layout></Layout>
	)
}