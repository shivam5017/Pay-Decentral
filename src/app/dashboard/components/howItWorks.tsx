import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4  text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        How It Works
      </h2>
      <p className="text-lg  mb-10 max-w-3xl mx-auto text-white">
        Integrate our SDK in just a few simple steps and start managing subscriptions instantly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Sign up for the SDK</h3>
          <p className="text-gray-600">
            Create an account and get access to our developer SDK to start integrating decentralized subscriptions into your website.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Add SDK to Your Codebase</h3>
          <p className="text-gray-600">
            Follow the simple documentation to integrate the subscription modal into your existing payment system. It’s that easy.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Customize the Modal</h3>
          <p className="text-gray-600">
            Customize the subscription modal to fit your brand style and business logic. Adjust colors, text, and subscription options.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">4</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Go Live</h3>
          <p className="text-gray-600">
            Once you're ready, go live and start accepting decentralized payments for subscriptions securely and seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
