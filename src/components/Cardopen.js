import React from "react";
import styled from "styled-components";
import "./cardopen.css";
import Giftcard from "./Giftcard";
import giftcard from "../assets/giftcard.jpg";
import coverpage from "../assets/giftCover.jpg";

export default function Cardopen({ onclick }) {
  return (
    <div class="codepen-wrapper">
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
            {/* <p>Hover to open</p> */}
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
              I hope you create a memory that becomes your happy place in all
              the many years yet to come on your birthday. Happy Birthday!
            </p>
            <p style={{ fontSize: "10px", marginTop: 50 }}>
              Click on Gift card😅
            </p>
            <div class="small_gift_card">
              <img
                src={giftcard}
                width="60px"
                height="40px"
                style={{ borderRadius: "5px" }}
                onClick={() => {
                  onclick("open");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
