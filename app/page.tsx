"use client";

import Navigation    from "@/components/Navigation";
import Hero          from "@/components/Hero";
import Skills        from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Projects      from "@/components/Projects";
import Experience    from "@/components/Experience";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <Navigation />
      <Hero />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
