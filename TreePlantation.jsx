import React, { useState } from "react";

export default function TreePlantation() {
  const [expanded, setExpanded] = useState({});

  const treeEvents = [
    {
      id: 1,
      name: "Community Tree Plantation Drive",
      image:
        "https://img.freepik.com/free-photo/people-planting-tree-countryside_23-2149401191.jpg",
      description:
        "Join our community tree plantation drive to help green our neighborhoods. We provide saplings, tools, and guidance to all volunteers. Let's plant for a healthier planet!",
    },
    {
      id: 2,
      name: "School Tree Planting Program",
      image:
        "https://img.freepik.com/free-photo/group-children-planting-trees_23-2148889021.jpg",
      description:
        "We partner with schools to educate children about the importance of trees and the environment. Students actively participate by planting saplings in their school grounds.",
    },
    {
      id: 3,
      name: "Urban Afforestation Campaign",
      image:
        "https://img.freepik.com/free-photo/tree-plantation-urban-area_23-2149006574.jpg",
      description:
        "This campaign focuses on planting trees in urban areas to improve air quality and beautify the city. Volunteers are welcome to help us make our cities greener.",
    },
  ];

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-12 px-6 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Tree Plantation Events
      </h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {treeEvents.map((event) => {
          const isExpanded = expanded[event.id];
          const shortText =
            event.description.length > 100
              ? event.description.substring(0, 100) + "..."
              : event.description;

          return (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-900 mb-3">
                  {event.name}
                </h2>
                <p className="text-gray-700">
                  {isExpanded ? event.description : shortText}
                </p>
                {event.description.length > 100 && (
                  <button
                    onClick={() => toggleReadMore(event.id)}
                    className="mt-4 text-green-700 font-semibold hover:underline"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
