import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, flash } from "react-animations";
import Confetti from "react-confetti";
import Cake from "./components/Cake";
export default function App() {
  const [party, setParty] = useState(false);

  // console.log(window.innerWidth());

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          // backgroundColor: "black",
          // position: "relative",
          marginBottom: "100px",
        }}
      >
        {party && <Confetti width={2000} height={2000} />}
        <Cake
          onchange={(e) => {
            e === "fadeout" && setParty(true);
          }}
        />
        <button style={{ bottom: 0, position: "absolute" }}>jjj</button>
      </div>
    </div>
    // <div>app</div>
  );
}
