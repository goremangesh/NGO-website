import React, { useState } from "react";

export default function Education() {
  const [expanded, setExpanded] = useState({});

  const educationEvents = [
    {
      id: 1,
      name: "Free Computer Basics Workshop",
      image:
        "https://img.freepik.com/free-photo/group-adults-computer-training_23-2149207279.jpg",
      description:
        "Learn the fundamentals of computers in this beginner-friendly workshop. Topics include basic MS Office, internet usage, and email setup. Perfect for adults and seniors.",
    },
    {
      id: 2,
      name: "STEM Education Program",
      image:
        "https://img.freepik.com/free-photo/child-studying-robotics_23-2149149035.jpg",
      description:
        "Encouraging children to explore science, technology, engineering, and mathematics through fun, hands-on experiments and activities.",
    },
    {
      id: 3,
      name: "Adult Literacy Classes",
      image:
        "https://img.freepik.com/free-photo/teacher-reading-book-classroom_23-2149140117.jpg",
      description:
        "Providing free literacy classes for adults to improve reading and writing skills, enabling better job opportunities and self-confidence.",
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
        Education Events
      </h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {educationEvents.map((event) => {
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
