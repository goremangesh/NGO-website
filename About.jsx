import React from "react";

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-green-50 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-800 mb-8">About Us</h1>

      {/* CEO Profile */}
      <div className="max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center mb-12">
        <img
          src="https://www.google.com/imgres?q=blank%20profile%20mage&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F08%2F09%2F17%2Favatar-1577909_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fblank%2520profile%2520picture%2F&docid=pvGdIoIu4SZZ2M&tbnid=EuhdR73sBVf2FM&vet=12ahUKEwjL0J24_oWPAxU9T2wGHWofNLkQM3oECB8QAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjL0J24_oWPAxU9T2wGHWofNLkQM3oECB8QAA"
          alt="CEO Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-700"
        />
        <h2 className="text-2xl font-bold text-green-800 mb-2">Rajesh Bhoite</h2>
        <p className="text-green-900 text-base leading-relaxed">
          CEO of NGO Foundation with a vision to empower communities through sustainable development,
          education, and healthcare initiatives. He leads the foundation with dedication and passion.
        </p>
      </div>

      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md text-green-900">
        <p className="mb-6 text-lg leading-relaxed">
          NGO Foundation is dedicated to improving communities through education,
          healthcare, environmental conservation, and social welfare. Founded
          with a passion to create positive change, we work with volunteers,
          donors, and partners to impact lives across the region.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our core values include compassion, transparency, sustainability, and
          inclusiveness. We believe in empowering individuals by providing
          resources, education, and support to build stronger and healthier
          communities.
        </p>
        <p className="text-lg leading-relaxed">
          Join us in our mission to make a difference. Together, we can plant
          seeds of hope and growth for generations to come.
        </p>
      </div>
    </section>
  );
}
