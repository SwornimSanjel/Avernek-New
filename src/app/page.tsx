import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LazyQuickActions from "@/components/LazyQuickActions";
import Hero from "@/components/sections/Hero";
import SpeedToLead from "@/components/sections/SpeedToLead";
import Problem from "@/components/sections/Problem";
import SystemFlow from "@/components/sections/SystemFlow";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import Industries from "@/components/sections/Industries";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <SpeedToLead />
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
      {/* Single floating assistant button — opens audit / demo. */}
      <LazyQuickActions />
    </>
  );
}
