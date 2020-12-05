import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";


const Home = () => {

  

  return (
    <main>
      <Mouse />
      
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            
              JDS AGENCY
            
            
              <DynamicText />
            
          </div>
        </div>
        <ButtonsBottom right={"/projet-1"} />
      
    </main>
  );
};

export default Home;
