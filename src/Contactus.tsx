// src/pages/Contact.tsx
import React from "react";
import Textbox from "./components/Textbox";

const Contact = () => {
  return (
    <div className="p-10 pt-20 pl-40 text-white flex justify-center flex-row">
      <Textbox
        xHead="Contact & Support"
        xText="We’re here to listen — even outside of Abyss. If you have questions, suggestions, or want to collaborate, feel free to reach out. 
        📧 Email us at: projectgem12@gmail.com
        ---------------------------
        📱 DM us on Instagram: https://www.instagram.com/cevrimiciterapist
        ---------------------------------
         love to hear from you and appreciate your interest in supporting mental well-being through technology."
        width="w-[600px]"
        height="h-[350px]"
        padding="p-8"
      />
    </div>
  );
};

export default Contact;
