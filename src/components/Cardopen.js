import React from "react";
import styled from "styled-components";
import "./cardopen.css";
import Giftcard from "./Giftcard";
import giftcard from "../assets/giftcard.jpg";
import coverpage from "../assets/giftCover.jpg";

export default function Cardopen() {
  return (
    <div class="codepen-wrapper">
      <div class="book">
        <div class="page">
          <div
            class="page__1"
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
            <p>Surprise!</p>
            <p> a very happy birth day</p>

            <Giftcard />
            <div class="small_gift_card">
              <img
                src={giftcard}
                width="60px"
                height="40px"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
