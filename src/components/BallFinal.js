import "../styles/Ball.css";
import React, { useState } from "react";
import { ShakeHorizontal } from "reshake";

const Ball = () => {
  const [answer, setAnswer] = useState("");
  const [animationActive, setAnimationActive] = useState(false);

  //API is expecting this
  let params = encodeURIComponent("Can I ask you a question");
  const url = `https://8ball.delegator.com/magic/JSON/${params}`;

  // step 3: animate shake and get answer
  const clickHandler = () => {
    setAnimationActive(true);
    setAnswer("");
    setTimeout(() => {
      setAnimationActive(false);
    }, 700);
    // step 2: call Magic 8 Ball API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.magic.answer);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="main">
      <ShakeHorizontal active={animationActive}>
        {/* Step 1 show ball on screen*/}
        <div className="ball" onClick={clickHandler}>
          <div className="light"></div>
          <div className="center"></div>
          <div className="triangle"></div>
          <div className="answer">{answer}</div>
        </div>
      </ShakeHorizontal>
      <div className="shadow"></div>
    </div>
  );
};

export default Ball;
