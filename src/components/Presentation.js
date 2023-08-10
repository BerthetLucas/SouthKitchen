import platderiz from '../assets/img/plat_de_riz.jpg'
import '../assets/styles/presentation.css'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Presentation () {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
      <div className ="presentation-container">
      <div className="presentation-backgroung relative flex flex-col justify-center py-16 md:h-full lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="flex flex-col justify-center mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center" data-aos="fade-right" data-aos-duration="2000">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over a lazy dog
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center" data-aos="fade-right" data-aos-duration="2000">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 h-50 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={platderiz}
            alt=""
          />
        </div>
      </div>
      </div>
      
    );
  };

  export default Presentation