import React, { useState } from "react";

export default function Health() {
  const [expanded, setExpanded] = useState({});

  const healthEvents = [
    {
      id: 1,
      name: "Free Health Checkup Camp",
      image:
        "https://img.freepik.com/free-photo/medical-examination-patient-clinic_23-2149373872.jpg",
      description:
        "We are providing free medical checkups for underprivileged communities in collaboration with local hospitals. Services include blood tests, eye checkups, vaccinations, and general consultations.",
    },
    {
      id: 2,
      name: "Blood Donation Drive",
      image:
        "https://img.freepik.com/free-photo/blood-donation_23-2148888603.jpg",
      description:
        "Join us in saving lives by donating blood. The camp is open to all healthy adults. Your one donation can help multiple patients in need.",
    },
    {
      id: 3,
      name: "Health Awareness Workshop",
      image:
        "https://img.freepik.com/free-photo/doctor-speaking-to-patient_23-2148888607.jpg",
      description:
        "Educational sessions on nutrition, hygiene, and disease prevention conducted by health professionals. Learn how to maintain a healthy lifestyle.",
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
        Health Events
      </h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {healthEvents.map((event) => {
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
