import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <Navbar />
      <main className="site-atmosphere">
        <Hero />
        <Problem />
        <SystemFlow />
        <WorkflowDemo />
        <Industries />
        <Proof />
        <Pricing />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
