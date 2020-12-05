import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";


const Home = () => {


  return (
	<main>
		<div className="home">

			<Navigation />
			<SocialNetwork />
			<div className="home-main">
			  <div className="main-content">
				<h1> WEB AGENCY </h1>
				<h2> <DynamicText /> </h2>
				  
				
			  </div>
			</div>
		</div>
	</main>
  );
};

export default Home;
