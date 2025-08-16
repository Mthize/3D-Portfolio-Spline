import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import ProgressBar from "./components/ProgressBar.jsx";

export default function App() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger When The Page is Loaded
    ScrollTrigger.refresh();

    // Cleanup ScrollTrigger when the page is component unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <ProgressBar />
    </>
  );
}
