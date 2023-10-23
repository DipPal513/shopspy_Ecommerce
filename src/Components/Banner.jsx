import React from "react";

const Banner = () => {
  return (
    <div className="banner h-[80vh] flex items-center justify-center relative -z-10">
      <img src="https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1380&t=st=1698051891~exp=1698052491~hmac=65763246de15d632465dc18eccb8615d9e7c2a78e0289079f8c5fb25c2446540" className="w-full h-full" alt="" />
      <div className="text-center absolute dark:text-white px-3 z-0 object-cover">
        <h1 className="text-4xl">
          <b>Shopspy</b> Provides You <b>Safe Delivery</b>
        </h1>
        <p>Get medicines at your home within 30 minutes.</p>
        <input type="text" className="w-full rounded px-3 py-2 mt-4" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Banner;
