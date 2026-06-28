import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <Typewriter
      loop
      typeSpeed={70}
      deleteSpeed={50}
      cursor
      cursorStyle="_"
      delaySpeed={1000}
      words={["Components", "Scalability", "Performance", "Maintanability"]}
    />
  );
};

export default TypewriterEffect;
