import Button from "@/app/aceternityUI/Button";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"; 

const HeroComponent = () => {
  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center w-full h-screen text-center font-sans"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4">
          Decentralized Subscriptions Made Easy
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto p-5">
          Unlock the power of decentralized payments with our simple,
          developer-friendly SDK&apos;s.
        </p>
        <Button title="Share" startIcon={<FaArrowRight />}/>
      </section>
    </>
  );
};

export default HeroComponent;
