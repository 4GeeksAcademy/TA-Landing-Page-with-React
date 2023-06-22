import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import BootstrapCard from "./BootstrapCard";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
		<div className="container d-flex">
			< BootstrapCard/>
		</div>
			< Footer/>
		</div>
	);
};
export default Home;
