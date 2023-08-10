import "../assets/styles/cardmenu.css";

import platderiz from "../assets/img/mezze.jpg";

function CardMenu() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-2xl gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
        <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src={platderiz}
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="jaune px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Join Team
            </h5>
            <p className="mb-5 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde.
            </p>
          </div>
        </div>
        <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className=" vert px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Hire Us
            </h5>
            <p className="mb-5 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde.
            </p>
          </div>
        </div>
        <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="bleu px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Hire Us
            </h5>
            <p className="mb-5 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
