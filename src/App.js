import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, flash } from "react-animations";
import Confetti from "react-confetti";
import Cake from "./components/Cake";
import useWindowDimensions from "./hooks/useDimensionhook";
import Cardopen from "./components/Cardopen";
import "./App.css";
// import Giftcard from "./components/Giftcard";
import banner from "./assets/banner.png";
import myntra from "./assets/myntra.png";
import giftcard from "./assets/giftcard.jpg";
import clip from "./assets/clip.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
};

export default function App() {
  const [party, setParty] = useState(false);
  const { height, width } = useWindowDimensions();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // console.log(window.innerWidth());

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1 }} class="modal">
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          class="modal"
        >
          {/* <h1>copied to clipboard</h1> */}
          <div
            style={{
              width: "300px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={giftcard}
              width="500px"
              height="250px"
              style={{ borderRadius: "5px" }}
              class="modal"
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 3,
                  color: "white",

                  fontSize: "5px",
                  marginLeft: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "black",
                }}
              >
                <h3>COPY TO CLIP-BOARD</h3>
                <img
                  src={clip}
                  width="15px"
                  height="10px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <img
                src={myntra}
                onClick={() => {
                  navigator.clipboard.writeText("6001220034563862");
                }}
                class="myntra"
                // style={{ transition: "initial", transitionDuration: "2s" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              {/* <p
                style={{
                  left: 5,
                  // backgroundColor: "black",
                }}
              >
                Gift card Details
              </p> */}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <p>Card No</p>
                  <p>6001220034563862</p>
                </div>
                <div>
                  <p>PIN</p>
                  <p>279399</p>
                </div>
              </div>
            </div>
            {/* <img src={nykaa} style={{ width: "200px" }} /> */}
          </div>
        </Modal>
      </div>
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
        {" "}
        <img
          src={banner}
          width="380px"
          height="100px"
          style={{
            borderRadiu: "5px",
            backgroundBlendMode: "multiply",
            backgroundColor: "black",
            position: "absolute",
            top: 50,
          }}
        />
        {party && <Confetti width={width} height={height} />}
        {!party && (
          <Cake
            onchange={(e) => {
              e === "fadeout" && setTimeout(() => setParty(true), 1000);
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
            // zIndex: 100,
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
            <Cardopen
              onclick={(e) => {
                e === "open" && setIsOpen(true);
              }}
            />
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
