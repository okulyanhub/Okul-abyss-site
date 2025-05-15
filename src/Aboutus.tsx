// src/pages/About.tsx

import Textbox from "./components/Textbox";

const About = () => {
  return (
    <div className="p-10 pt-20 text-white flex justify-center">
      <Textbox
        xHead="Biz Kimiz?"
        xText="Biz, insanların hayatında gerçek bir fark yaratmak için teknolojiyi kullanmaya kendini adamış, Şemikler Anadolu Lisesi (ŞAL) kökenli tutkulu bir TÜBİTAK proje ekibiyiz. Abyss projemiz, ruh sağlığını desteklemek amacıyla, erişilebilir ve yapay zekâ destekli sohbetler sunma isteğiyle doğdu. Bizler; öğrenciler, geliştiriciler ve düşünen bireyler olarak, ortak bir amaç etrafında birleşiyoruz: Duyulmaya ihtiyaç duyan herkes için güvenli, güvenilir ve empatik bir alan oluşturmak."
        width="w-[600px]"
        height="h-[500px]"
        padding="p-8"
      />
    </div>
  );
};

export default About;
