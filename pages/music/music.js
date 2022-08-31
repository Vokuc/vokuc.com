import Layout from "../../components/layout";
import Button from "../../components/button";
export default function Music() {
	return (
		<div>
			<Layout>
				<div className="h-screen">
					<p className="text-black font-black lg: text-xl">WHAT WOULD YOU LIKE TO DO TODAY?</p><br/>
					<div className="h-4 bg-gradient-to-t from-yellow-900 to-black my-4"></div>
					<div className="flex justify-around p-4">
						<div className="mx-12">Want Free Beats</div>
						<div className="mx-12">Want To get a licenced beat</div>
						<div className="mx-12">Want a Custom Beat?</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
