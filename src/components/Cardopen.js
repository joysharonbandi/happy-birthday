import React from "react";
import styled from "styled-components";
import "./cardopen.css";
import Giftcard from "./Giftcard";
import giftcard from "../assets/giftcard.jpg";
import coverpage from "../assets/giftCover.jpg";

export default function Cardopen({ onclick }) {
  return (
    <div class="codepen-wrapper">
         <div
              style={{
                position: 'absolute',
                bottom: '75%',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#FFD700',
                textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)',
                animation: 'pulse 2s ease-in-out infinite',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '2px',
                textAlign: 'center',
              }}
            >
               Click to open 
            </div>
      <div class="book">
        <div class="page">
          <div
            class="page__1 openCloseAnimation"
            id="page_1"
            onMouseLeave={() => {
              document
                .getElementById("page_1")
                ?.classList?.add?.("closeAnimaion");
            }}
            style={{
              backgroundImage: `url(${coverpage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
    
          </div>
          <div
            class="page__2"
            style={{
              backgroundImage: `url(${coverpage})`,
              backgroundSize: "fill",
              backgroundRepeat: "no-repeat",
              // opacity: 0.2,
            }}
          >
            <p class="text1">Surprise!</p>
            <p class="text2">
           <span style={{ fontWeight: 'bold' }}>Wishing you a very Happy Birthday 🎉</span>
           <br />
           <span style={{ fontSize: '12px' }}> May this year bring you continued success, happiness, and many achievements. Thank you for your guidance, support, and for keeping the team motivated and on track. Wishing you all the very best for the year ahead.</span>
            </p>
            {/* <p style={{ fontSize: "10px", marginTop: 50 }}>
              Click on Gift card
            </p> */}
            {/* <div class="small_gift_card">
              <img
                src={giftcard}
                width="60px"
                height="40px"
                style={{ borderRadius: "5px" }}
                onClick={() => {
                  onclick("open");
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
