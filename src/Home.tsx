import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Textbox from "./components/Textbox";
import Chat from "./components/Chat";

let text1 =
  "Welcome to abyss abyss is a chatbot project that's focused mainly on the psychology and therapy of people.";
let text2 =
  "Our goal is to help people by giving them a friend to talk to. Our therapy-trained AI chatbots are fully designed to help and be there for those who need support.";
let text3 =
  "Abyss is more than just a chatbot — it's a companion designed to support your mental well-being. Whether you're dealing with stress, anxiety, loneliness, or simply need someone to talk to, Abyss is always here. Our AI is trained in therapeutic conversation techniques to help guide, comfort, and listen — 24/7, judgment-free. It’s like having a supportive friend in your pocket, ready whenever you need to be heard.";
let text4 = "Talking to Abyss feels like opening up to someone who truly listens. Whether you're feeling overwhelmed, anxious, or just need a moment of connection, Abyss is always there — calm, kind, and patient. It's not just a chatbot; it's a safe space where your thoughts matter and your feelings are met with compassion. There’s no judgment, no pressure — just thoughtful, supportive conversation. With Abyss, you're never alone."
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
            xHead="Welcome to Abyss"
            xText={text1}
            width="w-[500px]"
            height="h-[300px]"
            padding="p-8"
          />
          <Textbox
            xHead="What is our goal"
            xText={text2}
            width="w-[500px]"
            height="h-[300px]"
            padding="p-8"
          />
          <Textbox
            xHead="Why you should use it"
            xText={text3}
            width="w-[1000px]"
            height="h-[400px]"
            padding="p-8"
          />
        </div>
      </div>

      <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-900 flex items-center justify-start px-24 flex">
        {startChat && <Chat />}
        <div className="pl-16">
          <Textbox
            xHead="Chatting with abyss"
            xText={text3}
            width="w-[1000px]"
            height="h-[400px]"
            padding="p-8"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
