import React from "react";

const ModalPreviewComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 text-white">
      {/* Left: Image Section */}
      <div className="w-full lg:w-80 mb-8 lg:mb-0 flex flex-wrap justify-center lg:justify-between items-center">
        <img
          src="/modal.png"
          alt="Feature Illustration"
          className="max-w-full h-auto rounded-lg shadow-xl border-2 border-purple-500 lg:mr-4"
        />
        <img
          src="/modal2.png"
          alt="Feature Illustration No.2"
          className="max-w-full h-auto rounded-lg shadow-xl border-2 border-purple-500"
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-full lg:w-1/2 px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
          Customizable Payment Modal
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed mb-6 font-light tracking-wide">
          Our platform provides an intuitive and fully customizable payment
          modal designed to seamlessly integrate into your subscription flow.
          Whether you need to tweak the design or control the user experience,
          our modal gives you complete flexibility to match your brand&apos;s unique
          style.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed font-light tracking-wide">
          Take advantage of powerful features such as multi-currency support,
          dynamic UI adjustments, and real-time transaction feedback. With
          enhanced security and easy configuration, our payment modal is the
          perfect solution for your subscription management needs.
        </p>
      </div>
    </section>
  );
};

export default ModalPreviewComponent;
