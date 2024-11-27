import HeroComponent from "./components/hero";
import { NavbarDemo } from "../aceternityUI/Navbar";
import BenefitsComponent from "./components/benefits";
import TrustedByComponent from "./components/trustedBy";
import HowItWorks from "./components/howItWorks";
import FeaturesSection from "./components/features";
import ModalPreviewComponent from "./components/modalPreview"

const DashboardPage = () => {
  return (
    <>
      <div className="bg-[#0f0f0f]">
        <NavbarDemo />
        <HeroComponent />
        <BenefitsComponent />
        <TrustedByComponent />
        <HowItWorks />
        <ModalPreviewComponent />
        <FeaturesSection />
      </div>
    </>
  );
};

export default DashboardPage;
