import platderiz from '../assets/img/plat_de_riz.jpg'
import '../assets/styles/presentation.css'


function Presentation () {

    return (
      <div className ="presentation-container mt-10 sm:mt-0">
      <div className="presentation-backgroung relative flex flex-col justify-center py-16 md:h-full lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="flex flex-col justify-center mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center" data-aos="fade-right" data-aos-duration="2000">
              La cuisine du Sud 
              <br className="md:block" />
              fraîche et ensoleillée
            </h2>
            <p className="mb-5 text-base text-justify text-gray-700 md:text-lg md:text-center" data-aos="fade-right" data-aos-duration="2000">
              Chez La Garrigue nous nous engageons sur une cuisine authentique et de qualité. Chaque jour notre chef vous fait découvrir de nouvelles saveurs avec les produits frais du jour.
            </p>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 h-50 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={platderiz}
            alt="image de plat avec du riz et des oeufs"
          />
        </div>
      </div>
      </div>
      
    );
  };

  export default Presentation