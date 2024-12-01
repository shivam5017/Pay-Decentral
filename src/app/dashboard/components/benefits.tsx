const BenefitsComponent = () => {
  return (
    <section className="py-16 px-10 text-center text-white bg-gradient-to-r from-purple-700 via-purple-900 to-gray-900">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
        Why Choose Decentralized Subscriptions?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-5 rounded-full shadow-lg mb-6">
            {/* Replace with an SVG or Icon */}
            <span className="text-white text-2xl">🛡️</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Security & Transparency</h3>
          <p className="text-gray-300 text-base">
            Blockchain-powered payments ensure your transactions are secure and transparent.
          </p>
        </div>
        {/* Benefit 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-green-500 to-lime-500 p-5 rounded-full shadow-lg mb-6">
            {/* Replace with an SVG or Icon */}
            <span className="text-white text-2xl">🌍</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Global Reach</h3>
          <p className="text-gray-300 text-base">
            Serve customers worldwide without relying on traditional financial intermediaries.
          </p>
        </div>
        {/* Benefit 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5 rounded-full shadow-lg mb-6">
            {/* Replace with an SVG or Icon */}
            <span className="text-white text-2xl">💰</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Lower Fees</h3>
          <p className="text-gray-300 text-base">
            Reduce transaction costs by eliminating middlemen from the process.
          </p>
        </div>
        {/* Benefit 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-full shadow-lg mb-6">
            {/* Replace with an SVG or Icon */}
            <span className="text-white text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-bold mb-3">User Empowerment</h3>
          <p className="text-gray-300 text-base">
            Give your users control over their subscription payments with full transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComponent;
