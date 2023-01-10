import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./style.css";
import { bounce, fadeIn } from "react-animations";
export default function Cake({ onchange }) {
  const [fire, setFire] = useState("flame");

  onchange(fire);

  const fadeout = keyframes`

0% {
    transform: skewX(20deg);
    box-shadow: 0 0 10px 30px rgba(orange, 0.2), 0 0 20px rgba(orange, 0.2),
      0 0 60px rgba(orange, 0.2), 0 0 80px rgba(orange, 0.2);
      opacity:0.5;
       background-color: orange;
       background: rgba(255, 255, 255, 1);
  }
  25% {
    transform: skewX(-20deg);
    box-shadow: 0 0 10px rgba(orange, 0.5), 0 0 20px rgba(orange, 0.5),
      0 0 60px rgba(orange, 0.5), 0 0 80px rgba(orange, 0.5);
      opacity:0.3;
       background-color: orange;
       background: rgba(255, 255, 255, 1);
  }
  50% {
    transform: skewX(-30deg);
    box-shadow: 0 0 10px rgba(orange, 0.3), 0 0 20px rgba(orange, 0.3),
      0 0 60px rgba(orange, 0.3), 0 0 80px rgba(orange, 0.3);
      opacity:0.2;
       background-color: orange;
       background: rgba(255, 255, 255, 1);
  }
  75% {
    transform: skewX(-50deg);
    box-shadow: 0 0 10px rgba(orange, 0.4), 0 0 20px rgba(orange, 0.4),
      0 0 60px rgba(orange, 0.4), 0 0 80px rgba(orange, 0.4);
      opacity:0.1
       background-color: orange;
       background: rgba(255, 255, 255, 1);
  }
  100% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(orange, 0.5);
    opacity:0;
    background-color: orange
    background: rgba(255, 255, 255, 1);
  }

  `;
  const Ani = styled.div`
    position: absolute;
    // background: rgba(255, 255, 255, 1);
    // background: -moz-linear-gradient(white 80%, transparent);
    // background: -webkit-linear-gradient(white 80%, transparent);
    // background: -o-linear-gradient(white 80%, transparent);
    // background: -ms-linear-gradient(white 80%, transparent);
    // background: linear-gradient(white 80%, transparent);
    width: 15px;
    height: 35px;
    border-radius: 50% 50% 20% 20%;
    top: -34px;
    left: 50%;
    margin-left: -7.5px;
    z-index: 10;

    // box-shadow: 0 0 15px 0 rgba(247, 93, 0, 0.4),
    //   0 -6px 4px 0 rgba(247, 128, 0, 0.7);
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
        // console.log(Math.round(average));
        if (Math.round(average) > 20) {
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
        {/* <div class="blinking-blow"></div> */}
        {/* <div class="thread"></div> */}
        {/* <div class="glow"></div> */}
        {/* <div class="flame"></div> */}
        {fire === "flame" ? (
          <div class="flame">{/* <div class="glow"></div> */}</div>
        ) : (
          <Ani></Ani>
        )}
      </div>
    </div>
  );
}
