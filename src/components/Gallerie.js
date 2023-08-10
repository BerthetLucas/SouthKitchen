import "../assets/styles/galerie.css";

import platderiz from "../assets/img/plat_de_riz.jpg";
import salade from "../assets/img/salade.jpg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallerie() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="md:flex flex-col justify-around items-center gap-5">
    <div className="flex flex-col items-center gap-5 md:flex-row justify-center">
      <img src={platderiz} alt="" className="w-3/5 md:w-1/4" data-aos="fade-up"></img>
      <img src={platderiz} alt="" className="w-3/5 md:w-1/4" data-aos="fade-up"></img>
      <img src={platderiz} alt="" className="w-3/5 md:w-1/4" data-aos="fade-up"></img>
    </div>


    <div className="hidden md:flex justify-center gap-5" >
      <img src={platderiz} alt="" className="w-1/4"data-aos="fade-up"></img>
      <img src={platderiz} alt="" className="w-1/4"data-aos="fade-up"></img>
      <img src={platderiz} alt="" className="w-1/4"data-aos="fade-up"></img>
    </div>




    </div>
  )
}

export default Gallerie;
