import "./App.css";
import Nav from "./components/Nav";
import Presentation from "./components/Presentation";
import Gallerie from "./components/Gallerie";
import CardMenu from "./components/cardmenu";
import History from "./components/history";
import Contact from "./components/contact";
import Footer from "./components/footer";


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-full z-10 bg-white">
        <Nav />
      </div>
      <div className="page1 h-screen flex flex-col justify-start" id="home">
        <Presentation />
      </div>

      <div
        className="page2 h-screen flex flex-col items-center gap-10 md:justify-around md:gap-0"
        id="galerie"
      >
        <h2 className="mb-10 mt-11 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Des plats ensoleilés
        </h2>
        <Gallerie />
      </div>

      <div id="nos-menus">
        <CardMenu />
      </div>

      <div
        id="nous-contacter"
        className="page3 flex flex-col justify-center items-center gap-6 pb-5 md:flex-row md:justify-between md:gap-0 md:pb-0 "
      >
        <History />
        <Contact />
      </div>
      <div className="bg-white">
      <Footer />
      </div>
    </div>
  );

}

export default App;
