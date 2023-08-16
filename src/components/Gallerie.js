import "../assets/styles/galerie.css";

import plattarte from "../assets/img/plattarte.jpg";
import platcourgette from "../assets/img/platcourgette.jpg";
import platpoischiche from "../assets/img/platpoischiche.jpg";
import platgastronomique from "../assets/img/platgastronomique.jpg";
import platpoisson from "../assets/img/platpoisson.jpg";
import platsaladefromage from "../assets/img/platsaladefromage.jpg";

function Gallerie() {
  return (
    <div className="md:flex flex-col justify-around items-center gap-5">
      <div className="flex flex-col items-center gap-5 md:flex-row justify-center">
        <img
          src={plattarte}
          alt=""
          className="w-3/5 md:w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
        <img
          src={platsaladefromage}
          alt=""
          className="w-3/5 md:w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
        <img
          src={platcourgette}
          alt=""
          className="w-3/5 md:w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
      </div>

      <div className="hidden md:flex justify-center gap-5">
        <img
          src={platgastronomique}
          alt=""
          className="w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
        <img
          src={platpoisson}
          alt=""
          className="w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
        <img
          src={platpoischiche}
          alt=""
          className="w-1/4"
          data-aos="fade-up"
          data-aos-offset="30"
        ></img>
      </div>
    </div>
  );
}

export default Gallerie;
