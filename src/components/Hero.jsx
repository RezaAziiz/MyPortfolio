import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [namaText, setNamaText] = useState("");
  const [jobText, setJobText] = useState("");
  const [showP, setShowP] = useState(false);
  const [animateParagraph, setAnimateParagraph] = useState(false);



  const speed = 50;

  useEffect(() => {
    const fullText = "Hi, my name is";
    const nameText = "Reza Maulana Aziiz";
    const jobString = "I am a Software Engineer";

    const typeText = async (textToType, setFn) => {
      let current = "";
      for (let i = 0; i < textToType.length; i++) {
        current += textToType[i];
        setFn(current);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    const startTyping = async () => {
      await typeText(fullText, setText);
      await typeText(nameText, setNamaText);
      await typeText(jobString, setJobText);
       setShowP(true);
        setTimeout(() => {
          setAnimateParagraph(true);
        }, 50);
    };

    startTyping();
  }, []);

  return (
    <section className="hero">
      <p1 className="typing">{text}<span className="cursor">|</span></p1>
      <h1 className="typing">{namaText}<span className="cursor"></span></h1>
      <h2 className="typing">{jobText}<span className="cursor"></span></h2>
      {showP && (
      <p className={`hero-paragraph ${animateParagraph ? 'show' : ''}`}>
         I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at{' '}
        <a
          href="https://upstatement.com/"
          target="_blank"
          rel="noreferrer"
          className="underline-animate"
        >
          Upstatement
        </a>
        .
      </p>
    )}
    </section>
  );
};

export default Hero;
// 