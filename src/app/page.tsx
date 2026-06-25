import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AmbientGlow from "@/components/AmbientGlow";
import QuickActions from "@/components/QuickActions";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import SystemFlow from "@/components/sections/SystemFlow";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import Industries from "@/components/sections/Industries";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="site-atmosphere">
        <Hero />
        <Problem />
        <SystemFlow />
        <WorkflowDemo />
        <Industries />
        <Proof />
        <Pricing />
        {/* <Team /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
      {/* Painted above the opaque section backgrounds (corner-only, ultra-low
          opacity) but below the navbar / floating button (higher z-index). */}
      <AmbientGlow />
      {/* Single floating assistant button — opens audit / demo. */}
      <QuickActions />
    </>
  );
}
