import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import ServiceIntro from "@/components/ServiceIntro";
import WebsiteService from "@/components/WebsiteService";
import LineService from "@/components/LineService";
import Pricing from "@/components/Pricing";
import StudentNetwork from "@/components/StudentNetwork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Works />
        <ServiceIntro />
        <WebsiteService />
        <LineService />
        <Pricing />
        <StudentNetwork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
