import React from "react";
import FeatureCard from "@/app/aceternityUI/FeaturesCard";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4  text-center bg-black">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        Powerful Features to Streamline Your Subscriptions
      </h2>
      <p className="text-lg text-white mb-10 max-w-3xl mx-auto">
        From customizable subscription plans to secure payment gateways on
        Solana, we’ve got you covered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <FeatureCard
          id="1"
          title="Solana Native Cryptocurrency Support"
          description="Accept Solana (SOL) tokens only. Effortlessly integrate cryptocurrency payments directly into your subscription flow."
          status="live"
        />

        <FeatureCard
          id="2"
          title="Seamless Subscription Management"
          description="Manage recurring billing, handle upgrades and downgrades, and
            automate cancellations. All done in a decentralized way on the
            Solana blockchain."
          status="coming-soon"
        />

        <FeatureCard
          id="3"
          title="Blockchain-Powered Invoicing"
          description="Generate invoices automatically with Solana transaction IDs,
            ensuring transparency and security with every transaction."
          status="coming-soon"
        />
        <FeatureCard
          id="4"
          title="Solana Payment Gateway Integration"
          description="Easily integrate with popular Solana-based payment gateways and
            wallets to ensure fast and secure payments for your subscriptions."
          status="coming-soon"
        />
        <FeatureCard
          id="5"
          title="Fully Customizable Payment Modal"
          description="Take full control over the design and flow of the subscription
            modal. Tailor the look and feel to match your brand and user
            experience."
          status="coming-soon"
        />
        <FeatureCard
          id="6"
          title="Real-Time Analytics & Reporting"
          description="Track your Solana-based subscriber base, monitor key subscription
            metrics, and get detailed reports on payment performance."
          status="coming-soon"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
