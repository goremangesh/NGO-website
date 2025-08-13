import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [expanded, setExpanded] = useState({});

  const events = [
    {
      id: 1,
      name: "Tree Plantation Drive",
      image:
        "https://img.freepik.com/free-photo/people-planting-tree-countryside_23-2149401191.jpg",
      description:
        "Join us in making the planet greener! We are organizing a community tree plantation drive this Sunday. Everyone is welcome to participate, and tools will be provided.",
    },
    {
      id: 2,
      name: "Free Health Checkup Camp",
      image:
        "https://img.freepik.com/free-photo/medical-examination-patient-clinic_23-2149373872.jpg",
      description:
        "We are providing free medical checkups for underprivileged communities in collaboration with local hospitals. Services include blood tests, eye checkups, and more.",
    },
    {
      id: 3,
      name: "Educational Workshop",
      image:
        "https://img.freepik.com/free-photo/group-children-school_23-2148892718.jpg",
      description:
        "Empowering children through knowledge. Participate in our free educational workshop for school students, covering subjects like science, math, and computer basics.",
    },
  ];

  const activities = [
    "Distributed blankets to 200+ homeless people during winter.",
    "Organized blood donation camp with 150+ donors.",
    "Conducted digital literacy training for rural youth.",
    "Cleaned and restored a community park with volunteers.",
    "Provided school supplies to 300 underprivileged children.",
  ];

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: false,
  };

  const backgroundGreen = "#d4edda"; // soft green background (like fresh leaves)
  const textGreenDark = "#155724"; // darker green for text

  return (
    <div className="font-sans" style={{ backgroundColor: backgroundGreen }}>
      {/* Intro Section */}
      <section className="p-8 text-center">
        <h1
          className="text-4xl font-extrabold mb-3"
          style={{ color: textGreenDark }}
        >
          Welcome to NGO Foundation
        </h1>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: textGreenDark }}>
          Our mission is to serve the community through education, healthcare,
          and environmental conservation.
        </p>
      </section>

      {/* Activity Log Slider */}
      <section className="py-6 px-6 -mb-6">
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: textGreenDark }}
        >
          Upcoming Events
        </h2>
        <div className="max-w-2xl mx-auto">
          <Slider {...sliderSettings}>
            {activities.map((activity, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <p className="text-green-900 text-lg font-semibold">{activity}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-10 px-6 -mt-4">
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: textGreenDark }}
        >
          Recent Activities
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => {
            const isExpanded = expanded[event.id];
            const shortText =
              event.description.length > 80
                ? event.description.substring(0, 80) + "..."
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
                <div className="p-4">
                  <h3 className="text-xl font-semibold" style={{ color: textGreenDark }}>
                    {event.name}
                  </h3>
                  <p className="mt-2" style={{ color: "#2f4f2f" }}>
                    {isExpanded ? event.description : shortText}
                  </p>
                  <button
                    onClick={() => toggleReadMore(event.id)}
                    className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
