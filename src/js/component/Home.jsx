import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";
import BootstrapCard from "./BootstrapCard";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
		<div className="d-flex row justify-content-around">
		<BootstrapCard/>
		</div>
			< Footer/>
		</div>
	);
};
export default Home;
