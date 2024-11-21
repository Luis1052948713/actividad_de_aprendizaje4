import React from "react";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import ContactForm from "./ContactForm";
import Skills from "./Skills";
import Interests from "./Interests";

const MainContent = () => {
  return (
    <div className="col-md-8 bg-light p-4 rounded-end">
      <header />
      <Portfolio />
      <Experience />
      <Skills />
      <ContactForm />
      <Interests />
    </div>
  );
};

export default MainContent;
