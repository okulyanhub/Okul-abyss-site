// src/pages/About.tsx
import React from "react";
import Textbox from "./components/Textbox";

const About = () => {
  return (
    <div className="p-10 pt-20 text-white flex justify-center">
      <Textbox
        xHead="Who Are We?"
        xText="We are a passionate TÜBİTAK project team from Şemikler Anadolu Lisesi (ŞAL), dedicated to using technology to make a real difference in people's lives. Our project, Abyss, was born from the desire to support mental health through accessible, AI-powered conversations. We're students, developers, and thinkers united by a common goal: to create a safe, reliable, and empathetic space for anyone who needs to be heard."
        width="w-[600px]"
        height="h-[500px]"
        padding="p-8"
      />
    </div>
  );
};

export default About;
