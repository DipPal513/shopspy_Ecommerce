import React from "react";

const Banner = () => {
  return (
    <div className="banner h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl">
          <b>Medsy</b> Provides You <b>Safe Delivery</b>
        </h1>
        <p>Get medicines at your home within 30 minutes.</p>
        <input type="text" className="w-full rounded px-3 py-2 mt-4" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Banner;
