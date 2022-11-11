import "../styles/Ball.css";
import React, { useState } from "react";
import { ShakeHorizontal } from "reshake";

const Ball = () => {
  const [answer, setAnswer] = useState("");
  const [animationActive, setAnimationActive] = useState(false);

  //API is expecting this
  let params = encodeURIComponent("Can I ask you a question");
  const uri = `https://8ball.delegator.com/magic/JSON/${params}`;

  // step 3: animate shake and get answer
  const clickHandler = async () => {
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 500);
    // step 2: call Magic 8 Ball API
    fetch(uri)
      .then((response) => response.json())
      .then((json) => {
        setAnswer(json.magic.answer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="shadow"></div>
      <ShakeHorizontal active={animationActive}>
        {/* Step 1 */}
        <div className="ball" onClick={clickHandler}>
          <div className="light"></div>
          <div className="center"></div>
          <div className="triangle"></div>
          <div className="answer">{answer}</div>
        </div>
      </ShakeHorizontal>
    </div>
  );
};

export default Ball;
