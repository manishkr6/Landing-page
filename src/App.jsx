import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricisingSection from "./components/PricisingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import NewslettersSection from "./components/NewslettersSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Nav />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricisingSection />
        <ServicesSection />
        <TestimonialSection />
        <NewslettersSection />
        <Footer />
      </div>
    </main>
  );
};

export default App;
