// src/pages/Contact.tsx
import React from "react";
import Textbox from "./components/Textbox";

const Contact = () => {
  return (
    <div className="p-10 pt-20 pl-40 text-white flex justify-center flex-row">
      <Textbox
        xHead="İletişim ve Destek"
        xText={`Sizi dinlemek için buradayız — Abyss dışında da. Sorularınız, önerileriniz varsa ya da bizimle iş birliği yapmak isterseniz, bize ulaşmaktan çekinmeyin. 
📧 E-posta: projectgem12@gmail.com
---------------------------
📱 Instagram üzerinden mesaj atın: https://www.instagram.com/cevrimiciterapist
---------------------------------
Teknoloji aracılığıyla ruh sağlığını desteklemeye gösterdiğiniz ilgi bizim için çok değerli. Sizden haber almak bizi mutlu eder.`}
        width="w-[600px]"
        height="h-[350px]"
        padding="p-8"
      />
    </div>
  );
};

export default Contact;
