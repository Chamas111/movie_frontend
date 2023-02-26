import React from "react";
import { useState } from "react";
import Trailer from "./../images/Trailer1.png";

function Movies_Details() {
  return (
    <>
      <div className="text-start" style={{ backgroundColor: "#f3f1f1" }}>
        <div className="row">
          <iframe
            src="https://www.youtube.com/embed/Yj2iELI6OeI?&autoplay=1&mute=0&playsinline=0&web-share=0"
            allowFullScreen
            width="560"
            height="615"
          ></iframe>
        </div>

        <div className="d-flex justify-content-center">
          <div class="card card-details p-3">
            <div class="card-body">
              <div class="d-flex gap-5">
                <div class="d-flex">
                  <img
                    src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1"
                    style={{
                      width: "250px",
                      height: "367px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div class="d-flex align-items-start flex-column mb-3 mt-5">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#3e8afa",
                      borderRadius: "30px",
                      color: "#fff",
                    }}
                  >
                    Watch now
                  </button>

                  <h2
                    style={{
                      fontFamily: "Roboto, Arial",
                      lineHeight: "48.75px",
                    }}
                  >
                    Bad Behavior
                  </h2>

                  <button className="mb-3">
                    <img src={Trailer} style={{ width: "35px" }} />
                    Trailer
                  </button>

                  <p>
                    At the Silver Creek boarding school for girls in the
                    Australian outback, students are largely left to their own
                    devices in their spare time. This series tells the gripping
                    and unsparing story of how the desire to belong sets in
                    motion a cruel dynamic.
                  </p>
                  <div class="container text-start">
                    <div class="row">
                      <div class="col">Released: 2023-02-17</div>
                      <div class="col">Genre: Drama</div>
                    </div>
                  </div>

                  <div class="container text-start">
                    <div class="row">
                      <div class="col">Duration: 45 min</div>
                      <div class="col">Country: Australia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       <div className="container d-flex ">
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              src="https://www.youtube.com/embed/Yj2iELI6OeI?&autoplay=1&mute=0&playsinline=0&web-share=0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="container">
          <h1>hellofdfdf</h1>
        </div>
      </div> */}
    </>
  );
}

export default Movies_Details;
