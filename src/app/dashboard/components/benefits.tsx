const BenefitsComponent = () => {
  return (
    <section className="py-16 text-center text-white  p-10">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">
        Why Choose Decentralized Subscriptions?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            {/* <Icon name="shield" size="32" color="white" /> */}
          </div>
          <h3 className="font-semibold">Security & Transparency</h3>
          <p className="text-gray-600">
            Blockchain-powered payments ensure your transactions are secure and
            transparent.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-500 p-4 rounded-full mb-4">
            {/* <Icon name="globe" size="32" color="white" /> */}
          </div>
          <h3 className="font-semibold">Global Reach</h3>
          <p className="text-gray-600">
            Serve customers worldwide without relying on traditional financial
            intermediaries.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-4 rounded-full mb-4">
            {/* <Icon name="currency-dollar" size="32" color="white" /> */}
          </div>
          <h3 className="font-semibold">Lower Fees</h3>
          <p className="text-gray-600">
            Reduce transaction costs by eliminating middlemen from the process.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-500 p-4 rounded-full mb-4">
            {/* <Icon name="user-lock" size="32" color="white" /> */}
          </div>
          <h3 className="font-semibold">User Empowerment</h3>
          <p className="text-gray-600">
            Give your users control over their subscription payments with full
            transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComponent;
