"use client";
import React, { useState } from "react";
import { PaymentModalWithProvider } from "pay-decentral";

const Docs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [developerWallet, setDeveloperWallet] = useState(
    "J2trdCWs9oSoxv1dtn62e47c2omC3QQjQbSVFTqywBN6"
  );
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const subscriptionPlans = [
    { id: "plan1", name: "Basic Plan", amount: "0.001" },
    { id: "plan2", name: "Pro Plan", amount: "0.002" },
    { id: "plan3", name: "Premium Plan", amount: "0.003" },
  ];

  return (
    <section className="py-16 px-4 text-left max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
        PayDecentral Documentation
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        PayDecentral is an easy-to-use npm package built on top of the{" "}
        <a
          href="https://docs.solanapay.com/"
          className="text-blue-500 hover:underline"
        >
          @solana/pay SDK
        </a>
        . This package allows you to integrate decentralized payment solutions
        for Solana-based payments into your web platform. With just a few lines
        of code, you can securely and quickly accept Solana payments through a
        seamless user experience.
      </p>

      {/* Installation Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Installation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          To get started with PayDecentral, you can install the package from npm
          using the following command:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
          <code>
            npm install pay-decentral
          </code>
        </pre>
      </div>

      {/* Usage Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Usage</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          After installation, you can import the `PaymentModal` component and
          use it to trigger the payment process. Below is a simple example of
          how to use it.
        </p>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Import and Initialize
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Import the `PaymentModal` component from the package and initialize it
          with the necessary parameters, such as the developer's wallet address
          and the payment amount.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
          <code>
            {`import { PaymentModal } from 'pay-decentral';`}
            <br />
            {`import { useState } from 'react';`}
            <br />
            <br />
            {`const [isOpen, setIsOpen] = useState(false);`}
            <br />
            {`const developerWallet = 'YourWalletAddress';`}
            <br />
            {` const subscriptionPlans = [
    { id: 'plan1', name: 'Basic Plan', amount: '0.001' },
    { id: 'plan2', name: 'Pro Plan', amount: '0.002' },
    { id: 'plan3', name: 'Premium Plan', amount: '0.003' },
  ];
`}
            <br />
            <br />
            {`const handleOpenModal = () => setIsOpen(true);`}
            <br />
            {`const handleCloseModal = () => setIsOpen(false);`}
            <br />
            <br />
            {`// Trigger button to open the modal`}
            <br />
            {`<button onClick={handleOpenModal}>Pay with Solana</button>`}
            <br />
            <br />
            {`<PaymentModal`}
            <br />
            {`  subscriptionPlans={subscriptionPlans}`}
            <br />
            {`  isOpen={isOpen}`}
            <br />
            {`  onClose={handleCloseModal}`}
            <br />
            {`  developerWallet={developerWallet}`}
            <br />
            {`/>`}
          </code>
        </pre>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Features</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          PayDecentral provides the following key features:
        </p>
        <ul className="list-disc pl-8 text-lg sm:text-xl text-gray-700 mb-4">
          <li>
            Built on top of the{" "}
            <a
              href="https://docs.solanapay.com/"
              className="text-blue-500 hover:underline"
            >
              @solana/pay
            </a>{" "}
            SDK, ensuring a reliable and secure payment solution.
          </li>
          <li>Accept Solana payments seamlessly within your app.</li>
          <li>Simple modal for users to make payments quickly.</li>
          <li>Easy integration with your existing platform.</li>
        </ul>
      </div>

      {/* Example Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Example</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Below is a complete example of how to integrate the PayDecentral
          package to trigger a payment modal.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
          <code>
            {`import { PaymentModal } from 'pay-decentral';`}
            <br />
            {`import { useState } from 'react';`}
            <br />
            <br />
            {`const [isOpen, setIsOpen] = useState(false);`}
            <br />
            {`const developerWallet = 'YourWalletAddress';`}
            <br />
            {` const subscriptionPlans = [
    { id: 'plan1', name: 'Basic Plan', amount: '0.001' },
    { id: 'plan2', name: 'Pro Plan', amount: '0.002' },
    { id: 'plan3', name: 'Premium Plan', amount: '0.003' },
  ];
`}
            <br />
            <br />
            {`const handleOpenModal = () => setIsOpen(true);`}
            <br />
            {`const handleCloseModal = () => setIsOpen(false);`}
            <br />
            <br />
            {`// Trigger button to open the modal`}
            <br />
            {`<button onClick={handleOpenModal}>Pay with Solana</button>`}
            <br />
            <br />
            {`<PaymentModal`}
            <br />
            {`  subscriptionPlans={subscriptionPlans}`}
            <br />
            {`  isOpen={isOpen}`}
            <br />
            {`  onClose={handleCloseModal}`}
            <br />
            {`  developerWallet={developerWallet}`}
            <br />
            {`/>`}
          </code>
        </pre>
      </div>

      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
        Try the Payment Modal
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        You can try the modal functionality by clicking on the button below.
        This will open a decentralized payment modal, allowing you to simulate
        how users can pay with Solana for a subscription.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Click the Button Below to Open the Modal:
        </h3>
        <button
          onClick={handleOpenModal}
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out w-full sm:w-auto"
        >
          Pay with Solana
        </button>
      </div>

      <PaymentModalWithProvider
        subscriptionPlans={subscriptionPlans}
        isOpen={isOpen}
        onClose={handleCloseModal}
        developerWallet={developerWallet}
        onPaymentVerified={(planId, transactionSignature) => {
          console.log(`Payment for ${planId} verified with transaction ${transactionSignature}`);
        }}
      />
    </section>
  );
};

export default Docs;
