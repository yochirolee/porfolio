import Head from "next/head";
import { Jumbotron } from "../components/ui/Jumbotron";

export default function Home() {
	return (
		<>
			<Head className="">
				<title>Porfolio - Yochiro Lee</title>
				<meta name="description" content="Created by Yosho" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
					alt="true"
				/>
			</Head>
			<Jumbotron />
		</>
	);
}
