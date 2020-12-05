import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';





export const Project1 = () => {
  return (
    <main>
      
      <div className="project">
        <Navigation />
        <Logo />

		Projet 1
       
        
        <ButtonsBottom left={'/'} right={'/projet-2'} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      
      <div className="project">
        <Navigation />
        <Logo />

        Projet 2
        
        <ButtonsBottom left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      
      <div className="project">
        <Navigation />
        <Logo />

		Projet 3
        
        
        <ButtonsBottom left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      
      <div className="project">
        <Navigation />
        <Logo />

		Projet 4
        
        
        <ButtonsBottom left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};