import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 text-center bg-black">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        How It Works
      </h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto text-white">
        Easily integrate decentralized subscriptions into your platform with our simple npm package. Follow the steps below to get started.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-t from-purple-700 to-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Install the Package</h3>
          <p className="text-gray-300">
            Install our npm package to easily integrate a Solana payment modal.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-t from-teal-600 to-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Import the Package</h3>
          <p className="text-gray-300">
            Import the package into your project and start using its features to manage subscriptions.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-t from-yellow-500 to-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Configure Your Subscription Plans</h3>
          <p className="text-gray-300">
            Set up your subscription plans and configure the necessary parameters (pricing, duration, etc.) directly in your code.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center bg-gradient-to-t from-indigo-800 to-black p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">4</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Read the Docs & Go Live</h3>
          <p className="text-gray-300">
            For more detailed instructions, check out our documentation. Once you&apos;re ready, go live and start accepting decentralized payments!
            <br />
            <a href="/docs" className="text-blue-300 hover:underline">View Documentation</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
