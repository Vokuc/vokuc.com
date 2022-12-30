import { sanityClient } from "../lib/sanity.server";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { projectsImages } from "../components/productImages";
import {
	FaHtml5,
	FaCss3,
	FaReact,
	FaGit,
	FaGithub,
	FaJs,
} from "react-icons/fa";
import Images from "../public/images/images";

const iconStyles =
	"text-6xl m-4 p-4 border border-red-800 flex flex-col justify-center";
const iconTextStyles = "text-lg flex justify-center font-black text-black";

export default function Software() {
	return (
		<Layout>
			<h1 className="text-2xl font-black text-black p-2 flex justify-center">
				My Top Skills
			</h1>
			<div className="flex flex-wrap p-2 m-2 justify-center">
				<div className={`${iconStyles} text-blue-800`}>
					<FaHtml5 />
					<p className={`${iconTextStyles}`}>HTML</p>
				</div>
				<div className={`${iconStyles} text-red-800`}>
					<FaCss3 />
					<p className={`${iconTextStyles}`}>CSS</p>
				</div>
				<div className={`${iconStyles} text-red-800`}>
					<FaJs />
					<p className={`${iconTextStyles}`}>JAVASCRIPT</p>
				</div>

				<div className={`${iconStyles} text-blue-600`}>
					<FaReact />
					<p className={`${iconTextStyles}`}>REACT</p>
				</div>
				<div className={`${iconStyles}`}>
					<Image
						alt="next js icon"
						width={80}
						height={80}
						src={Images.nextJsLogo}
					/>
					<p className={iconTextStyles}>NEXT JS</p>
				</div>
				<div className={`${iconStyles}`}>
					<Image
						alt="tailwind icon"
						width={80}
						height={80}
						src={Images.tailwind}
					/>
					<p className={iconTextStyles}>TAILWIND CSS</p>
				</div>
				<div className={`${iconStyles}`}>
					<Image
						alt="next js icon"
						width={80}
						height={80}
						src={Images.sanity}
					/>
					<p className={iconTextStyles}>SANITY</p>
				</div>
				<div className={`${iconStyles} text-red-700`}>
					<FaGit />
					<p className={`${iconTextStyles}`}>GIT</p>
				</div>
				<div className={`${iconStyles} text-black flex flex-col`}>
					<FaGithub />
					<p className={`${iconTextStyles}`}>GITHUB</p>
				</div>
			</div>
			<div>
				<h3
					className={`border border-black flex justify-center m-4 p-2 text-black text-xl font-semibold`}
				>
					BELOW ARE SOME PROJECTS I HAVE WORKED ON
				</h3>

				<div className="flex justify-between flex-wrap m-2">
					{projectsImages.map((item) => (
						<li
							key={item.id}
							className="m-2 p-2 hover:p-3 border rounded border-yellow-900 bg-black"
							style={{ listStyleType: "none" }}
						>
							<Link href={item.projectLink}>
								<a target="_blank" style={{ textDecoration: "none" }}>
									<Image
										alt="item"
										className=""
										height={200}
										width={300}
										src={item.documentLink}
									/>
									<p className="flex justify-center">
										{item.name}
									</p>
								</a>
							</Link>
						</li>
					))}
				</div>
			</div>
		</Layout>
	);
}
