"use client";
import React, { useEffect, useState ,useContext} from "react";
import { PaymentModalWithProvider, getUserData } from "pay-decentral";
import { AuthContext } from "../AuthContext/AuthContext";


const Docs = () => {
  const context = useContext(AuthContext);
  const authState = context?.authState;
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [developerApiKey, setDeveloperApiKey] = useState("");
  const [isClient, setIsClient] = useState(false);

  const developerWallet = "J2trdCWs9oSoxv1dtn62e47c2omC3QQjQbSVFTqywBN6";


  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);


  useEffect(() => {
    if (authState?.developerDetails?.apiKey) {
      setDeveloperApiKey(authState.developerDetails.apiKey);
    }
  }, [authState]);

  const copyToClipboard = () => {
    if (developerApiKey) {
      navigator.clipboard
        .writeText(developerApiKey)
        .then(() => {
          alert("API Key copied to clipboard!");
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  useEffect(() => {
    if (developerApiKey && isClient) {
      const fetchUserData = async () => {
        try {
          const data = await getUserData(developerApiKey);
          setUsers(data);
          console.log(users);
        } catch (err) {
          console.log(err);
        }
      };

      fetchUserData();
    } else {
      console.log("Developer API Key is missing or invalid");
    }
  }, [developerApiKey, isClient]);

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
          <code>npm install pay-decentral</code>
        </pre>
      </div>

      {/* Usage Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Usage
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          After installation, you can import the `PaymentModal` component and
          use it to trigger the payment process. Below is a simple example of
          how to use it.
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Developer API Key</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Register to Our Website to get Your own API KEY to be able to use our Payment Modal.
        </p>
        <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Your API Key:
        </h2>

        <div className="relative">
          <p 
            className="text-lg sm:text-xl text-gray-700 mb-4 break-all overflow-hidden max-w-full"
            title={developerApiKey} 
          >
            {developerApiKey}
          </p>

          <button
            onClick={copyToClipboard}
            className="absolute right-0 top-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Copy
          </button>
        </div>
      </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Import and Initialize
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Import the `PaymentModal` component from the package and initialize it
          with the necessary parameters, such as the developer&apos;s wallet address
          and the payment amount.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
          <code>
            {`1:- Import the NPM Package which contains 2 things PaymentModalWithProvider || PaymentModal(Both are SameThings but call PaymentModalWithProvider) and getUserData`}
            <br />
            {`import { PaymentModalWithProvider,getUserData } from 'pay-decentral';`}
            <br />
            <br />
            {`getUserData is a function used to get the user's payment status`}
            <br />
            {`getUserData(developerApiKey) Developer Key is used to get the data of Your Website User's payment Status`}
            <br />
            <br />
            {`This is the PaymentModal`}
            <br />
            {`<PaymentModal`}
            <br />
            {`  subscriptionPlans={subscriptionPlans}`}
            <br />
            {`  userEmail={"userDetails?.userEmail"}`}
            <br />
            {`  isOpen={isOpen}`}
            <br />
            {`  onClose={handleCloseModal}`}
            <br />
            {`  developerWallet={developerWallet}`}
            <br />
            {`  developerApiKey={developerApiKey}`}
            <br />
            {`  onPaymentVerified={(planId,transactionSignature)=>{
                     console.log('Payment for {planId} verified with transaction {transactionSignature}')
          }}`}

            {`/>`}
          </code>
        </pre>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Features
        </h2>
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Example
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Below is a complete example of how to integrate the PayDecentral
          package to trigger a payment modal.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
          <code>
            {`1:- Import the NPM Package which contains 2 things PaymentModalWithProvider || PaymentModal(Both are SameThings but call PaymentModalWithProvider) and getUserData`}
            <br />
            {`import { PaymentModalWithProvider,getUserData } from 'pay-decentral';`}
            <br />
            {`import { useState } from 'react';`}
            <br />
            <br />
            {`2:- Use to open the PaymentModal`}
            <br />
            {`const [isOpen, setIsOpen] = useState(false);`}
            <br />
            <br />
            {`3:- Address where you want to receive funds on`}
            <br />
            {`const developerWallet = 'YourWalletAddress';`}
            <br />
            <br />
            {`4:- Add UserEmail:- Example You get userDetails from AuthContext and it contains userEmail="paydecentral@gmail.com" right so just add UserDetails?.userEmail`}
            <br />
            {`const userEmail='paydecentral@gmail.com'`}
            <br />
            <br />
            {`5:- Once You register you will get an API Key to use Add that here`}
            <br />
            {`const developerApiKey='Your API Key'`}
            <br />
            <br />
            {`How you can get User's Data (Do this According to Your Preference)`}
            {`
    
  useEffect(() => {
    if (developerApiKey) {
      const fetchUserData = async () => {
        try {
         
          const data = await getUserData(developerApiKey);
        
          setUsers(data);
        } catch (err) {
          console.log(err)
        }
      };

      fetchUserData();
    } else {
      console.log("Developer API Key is missing or invalid");
    }
  }, [developerApiKey]);

    fetchUserData();
  }, []);
            `}
            <br />
            <br />
            {`6:- Define your Plans with amount like this Note:- Amount should be in Solana example 1 SOL = 239$ and you Plan is of 50$ than SOL = 0.21`}
            <br />
            {` const subscriptionPlans = [
    { id: 'plan1', name: 'Basic Plan', amount: '0.001' },
    { id: 'plan2', name: 'Pro Plan', amount: '0.002' },
    { id: 'plan3', name: 'Premium Plan', amount: '0.003' },
  ];
`}
            <br />
            <br />
            {`handleOpenModal and handleCloseModal is used to open close the Payment Modal`}
            <br />
            {`const handleOpenModal = () => setIsOpen(true);`}
            <br />
            {`const handleCloseModal = () => setIsOpen(false);`}
            <br />
            <br />
            {`// Trigger button to open the modal`}
            <br />
            <br />
            {`Create a button to Open the Modal for payment`}
            <br />
            {`<button onClick={handleOpenModal}>Pay with Solana</button>`}
            <br />
            <br />
            {`This is the PaymentModal`}
            <br />
            {`<PaymentModal`}
            <br />
            {`  subscriptionPlans={subscriptionPlans}`}
            <br />
            {`  userEmail={"userDetails?.userEmail"}`}
            <br />
            {`  isOpen={isOpen}`}
            <br />
            {`  onClose={handleCloseModal}`}
            <br />
            {`  developerWallet={developerWallet}`}
            <br />
            {`  developerApiKey={developerApiKey}`}
            <br />
            {`  onPaymentVerified={(planId,transactionSignature)=>{
                     console.log('Payment for {planId} verified with transaction {transactionSignature}')
          }}`}

            {`/>`}
          </code>
        </pre>
        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto mt-10">
          <code>
            {`Response You get from getUserData => `}
            <br />
            {`
            createdAt:"2024-11-30T18:12:19.550Z"
            email:"user@gmail.com"
            planId:"Basic"
            transactionSignature:"38J...sF1 (Transaction Signature)"
            walletAddress:"7t...nh (User's Solana Wallet Address)"
            `}
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

      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 mt-20">
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

      {isOpen && (
        <PaymentModalWithProvider
          subscriptionPlans={subscriptionPlans}
          userEmail={'shivammalik@gmail.com'}
          isOpen={isOpen}
          onClose={handleCloseModal}
          developerWallet={developerWallet}
          developerApiKey={developerApiKey}
          onPaymentVerified={(planId, transactionSignature) => {
            console.log(
              `Payment for ${planId} verified with transaction ${transactionSignature}`
            );
          }}
        />
      )}
    </section>
  );
};

export default Docs;
