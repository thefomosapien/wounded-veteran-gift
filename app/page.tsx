import TopBar from "@/components/wounded-warrior/TopBar";
import Hero from "@/components/wounded-warrior/Hero";
import HowItWorks from "@/components/wounded-warrior/HowItWorks";
import BenefitTiles from "@/components/wounded-warrior/BenefitTiles";
import GiftTiers from "@/components/wounded-warrior/GiftTiers";
import FounderStory from "@/components/wounded-warrior/FounderStory";
import America250 from "@/components/wounded-warrior/America250";
import ProofSection from "@/components/wounded-warrior/ProofSection";
import ClosingCTA from "@/components/wounded-warrior/ClosingCTA";
import PageFooter from "@/components/wounded-warrior/PageFooter";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <TopBar />

      <main id="top">
        <div id="main-content">
          <Hero />
          <HowItWorks />
          <BenefitTiles />
          <GiftTiers />
          <FounderStory />
          <America250 />
          <ProofSection />
          <ClosingCTA />
        </div>
      </main>

      <PageFooter />
    </>
  );
}
