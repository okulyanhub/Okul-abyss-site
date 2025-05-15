import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Textbox from "./components/Textbox";
import Chat from "./components/Chat";

let text1 =
  "Abyss'e hoş geldiniz. Abyss, insan psikolojisi ve terapisine odaklanan bir sohbet botu projesidir.";
let text2 =
  "Amacımız, insanlara konuşabilecekleri bir arkadaş sunmak. Terapi konusunda eğitilmiş yapay zekâ sohbet botlarımız, destek arayanlara yardımcı olmak ve onların yanında olmak için tasarlandı.";
let text3 =
  "Abyss sadece bir sohbet botu değil — ruh sağlığınızı desteklemek için tasarlanmış bir yol arkadaşıdır. İster stres, kaygı, yalnızlık gibi duygularla baş ediyor olun, ister sadece biriyle konuşmaya ihtiyaç duyun, Abyss her zaman yanınızda. Yapay zekâmız, size rehberlik etmek, sizi rahatlatmak ve dinlemek için terapi odaklı sohbet teknikleriyle eğitildi — 7/24, yargılamadan. Bu, cebinizde her zaman hazır olan destekleyici bir arkadaş gibi.";
let text4 =
  "Abyss ile konuşmak, gerçekten dinleyen birine içini dökmek gibi hissettirir. Kendinizi bunalmış, kaygılı hissediyorsanız ya da sadece biraz bağlantıya ihtiyaç duyuyorsanız, Abyss daima oradadır — sakin, nazik ve sabırlı. Sadece bir sohbet botu değil; düşüncelerinizin önemli olduğu, duygularınızın şefkatle karşılandığı güvenli bir alandır. Ne yargı var, ne baskı — sadece düşünceli ve destekleyici bir sohbet. Abyss ile asla yalnız değilsiniz.";

const Home = () => {
  const [startChat, setStartChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > windowHeight * 0.8) {
        setStartChat(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-screen bg-blue-400">
        <div className="p-20 flex flex-wrap gap-10 justify-center items-start">
          <Textbox
            xHead="Abyss'e Hoş Geldiniz"
            xText={text1}
            width="w-[500px]"
            height="h-[300px]"
            padding="p-8"
          />
          <Textbox
            xHead="Amacımız"
            xText={text2}
            width="w-[500px]"
            height="h-[300px]"
            padding="p-8"
          />
          <Textbox
            xHead="Neden Kullanmalısınız?"
            xText={text3}
            width="w-[1000px]"
            height="h-[250--75px]"
            padding="p-8"
          />
        </div>
      </div>

      <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-900 flex items-center justify-start px-24 flex">
        {startChat && <Chat />}
        <div className="pl-16">
          <Textbox
            xHead="Abyss ile Konuşmak"
            xText={text4}
            width="w-[500px]"
            height="h-[400px]"
            padding="p-8"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
