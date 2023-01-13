import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, flash } from "react-animations";
import Confetti from "react-confetti";
import Cake from "./components/Cake";
import useWindowDimensions from "./hooks/useDimensionhook";
import Cardopen from "./components/Cardopen";
import "./App.css";
// import Giftcard from "./components/Giftcard";

export default function App() {
  const [party, setParty] = useState(false);
  const { height, width } = useWindowDimensions();

  // console.log(window.innerWidth());
  console.log(height, width);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          backgroundColor: "black",
          // position: "absolute",
          // top: "50%",

          // marginBottom: "100px",
        }}
      >
        {party && <Confetti width={width} height={height} />}
        {!party && (
          <Cake
            onchange={(e) => {
              e === "fadeout" && setTimeout(() => setParty(true), 2000);
            }}
          />
        )}
      </div>
      {party && (
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "hidden",
            zIndex: 100,
            position: "absolute",
            top: 0,
          }}
          class="greetingCard"
        >
          <div
            style={{
              width: "250px",
              // backgroundColor: "black",
              height: "300px",
            }}
          >
            <Cardopen />
          </div>
        </div>
      )}
      {/* <Giftcard /> */}
    </div>
    // <div>app</div>
  );
}

// import React from "react";

// export default function App() {
//   return (
//     <div style={{ width: "100%", backgroundColor: "black", height: "100vh" }}>
//       App
//     </div>
//   );
// }
