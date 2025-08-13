import React from "react";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-green-50 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1>

      {/* Contact Info */}
      <div className="max-w-xl bg-white p-8 rounded-lg shadow-md text-green-900">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-2">
          📞 Mobile:{" "}
          <a href="tel:+919876543210" className="text-green-700 hover:underline">
            +91 98765 43210
          </a>
        </p>
        <p className="mb-2">
          🌐 Facebook:{" "}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            facebook.com/yourprofile
          </a>
        </p>
        <p className="mb-2">
          📸 Instagram:{" "}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            instagram.com/yourprofile
          </a>
        </p>
        <p className="mb-2">
          🐦 Twitter:{" "}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            twitter.com/yourprofile
          </a>
        </p>
      </div>
    </section>
  );
}
