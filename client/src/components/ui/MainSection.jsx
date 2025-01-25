import React, { useState, useEffect } from "react";

const MainSection = () => {
  const banners = [
    "https://via.placeholder.com/1200x400?text=Banner+1",
    "https://via.placeholder.com/1200x400?text=Banner+2",
    "https://via.placeholder.com/1200x400?text=Banner+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next banner
  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Handle previous banner
  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Automatic change with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      nextBanner();
    }, 5000);

    // Clear timeout on unmount or when currentIndex changes
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Banner Image */}
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
