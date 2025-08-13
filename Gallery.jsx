import React from "react";

// Sample base URL for images (can be replaced with your own)
const baseImageURL = "https://picsum.photos/400/300?random=";

// Generate an array of 100 images with random picsum placeholders
const images = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Event Image ${i + 1}`,
  image: `${baseImageURL}${i + 1}`, // Unique image URL by changing query param
}));

export default function Gallery() {
  return (
    <section className="py-12 px-6 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        Event Gallery
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-7xl mx-auto">
        {images.map(({ id, name, image }) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-green-700 truncate">
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
