import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn } from "react-animations";

import "./style.css";
export default function App() {
  const flame = keyframes`0% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(orange, 0.2), 0 0 20px rgba(orange, 0.2),
      0 0 60px rgba(orange, 0.2), 0 0 80px rgba(orange, 0.2);
  }
  25% {
    transform: skewX(-5deg);
    box-shadow: 0 0 10px rgba(orange, 0.5), 0 0 20px rgba(orange, 0.5),
      0 0 60px rgba(orange, 0.5), 0 0 80px rgba(orange, 0.5);
  }
  50% {
    transform: skewX(10deg);
    box-shadow: 0 0 10px rgba(orange, 0.3), 0 0 20px rgba(orange, 0.3),
      0 0 60px rgba(orange, 0.3), 0 0 80px rgba(orange, 0.3);
  }
  75% {
    transform: skewX(-10deg);
    box-shadow: 0 0 10px rgba(orange, 0.4), 0 0 20px rgba(orange, 0.4),
      0 0 60px rgba(orange, 0.4), 0 0 80px rgba(orange, 0.4);
  }
  100% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(orange, 0);
  }`;
  const [fire, setFire] = useState("flame");

  const fadeout = keyframes`

0% {
    transform: skewX(20deg);
    box-shadow: 0 0 10px rgba(orange, 0.2), 0 0 20px rgba(orange, 0.2),
      0 0 60px rgba(orange, 0.2), 0 0 80px rgba(orange, 0.2);
      opacity:0.5;
       background-color: orange;
  }
  25% {
    transform: skewX(-20deg);
    box-shadow: 0 0 10px rgba(orange, 0.5), 0 0 20px rgba(orange, 0.5),
      0 0 60px rgba(orange, 0.5), 0 0 80px rgba(orange, 0.5);
      opacity:0.3;
       background-color: orange;
  }
  50% {
    transform: skewX(-30deg);
    box-shadow: 0 0 10px rgba(orange, 0.3), 0 0 20px rgba(orange, 0.3),
      0 0 60px rgba(orange, 0.3), 0 0 80px rgba(orange, 0.3);
      opacity:0.2;
       background-color: orange;
  }
  75% {
    transform: skewX(-50deg);
    box-shadow: 0 0 10px rgba(orange, 0.4), 0 0 20px rgba(orange, 0.4),
      0 0 60px rgba(orange, 0.4), 0 0 80px rgba(orange, 0.4);
      opacity:0.1
       background-color: orange;
  }
  100% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(orange, 0);
    opacity:0
  }

  `;
  const Ani = styled.div`
    position: absolute;
    // background-color: orange;
    width: 15px;
    height: 35px;
    border-radius: 10px 10px 10px 10px / 25px 25px 10px 10px;
    top: -34px;
    left: 50%;
    margin-left: -7.5px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(orange, 0.5), 0 0 20px rgba(orange, 0.5),
      0 0 60px rgba(orange, 0.5), 0 0 80px rgba(orange, 0.5);
    transform-origin: 50% 90%;
    animation: ${fadeout} 1s linear 1;
    // animation-name:${fadeout}
    // animation-duration: 4;
    // animation-iteration-count: infinite;
  `;
  console.log(fire);

  navigator.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then(function (stream) {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);
      scriptProcessor.onaudioprocess = function () {
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        const arraySum = array.reduce((a, value) => a + value, 0);
        const average = arraySum / array.length;
        console.log(Math.round(average));
        if (Math.round(average) > 50) {
          setFire("fadeout");
        }
        // colorPids(average);
      };
    })
    .catch(function (err) {
      /* handle the error */
      console.error(err);
    });
  return (
    <div>
      <div class="cake">
        <div class="plate"></div>
        <div class="layer layer-bottom"></div>
        <div class="layer layer-middle"></div>
        <div class="layer layer-top"></div>
        <div class="icing"></div>
        <div class="drip drip1"></div>
        <div class="drip drip2"></div>
        <div class="drip drip3"></div>
        <div class="candle">
          {fire === "flame" ? <div class="flame"></div> : <Ani></Ani>}
        </div>
      </div>
      <button
        onClick={() => {
          setFire("fadeout");
        }}
      >
        jjj
      </button>
    </div>
    // <div>app</div>
  );
}
