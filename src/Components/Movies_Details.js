import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Trailer from "./../images/Trailer1.png";

function Movies_Details() {
  const { movie_id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${movie_id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [movie_id]);
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${movie_id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    movie && (
      <>
        <div className="text-start" style={{ backgroundColor: "#f3f1f1" }}>
          <div className="row">
            <iframe
              src="https://www.youtube.com/embed/Yj2iELI6OeI?&autoplay=0&mute=0&playsinline=0&web-share=0"
              allowFullScreen
              width="560"
              height="615"
              title="trailer"
            ></iframe>
          </div>

          <div className="d-flex justify-content-center">
            <div class="card card-details p-3">
              <div class="card-body">
                <div class="d-flex gap-5">
                  <div class="d-flex">
                    <img
                      src={movie.url}
                      style={{
                        width: "250px",
                        height: "367px",
                        borderRadius: "10px",
                      }}
                      alt="movieimg"
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
                      {movie?.title}
                    </h2>

                    <button className="mb-3">
                      <img
                        src={Trailer}
                        style={{ width: "35px" }}
                        alt="trailer"
                      />
                      Trailer
                    </button>

                    <p>
                      At the Silver Creek boarding school for girls in the
                      Australian outback, students are largely left to their own
                      devices in their spare time. This series tells the
                      gripping and unsparing story of how the desire to belong
                      sets in motion a cruel dynamic.
                    </p>
                    <div class="container text-start">
                      <div class="row">
                        <div class="col">Released: {movie.year}</div>
                        <div class="col">Genre: {movie.genre}</div>
                      </div>
                    </div>

                    <div class="container text-start">
                      <div class="row">
                        <div class="col">Duration: {movie.duration} min</div>
                        <div class="col">Country: {movie.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-sm-flex align-items-center justify-content-center gap-3 pb-4">
            <button className="btn btn-success">
              <Link to={`/movies/${movie_id}/update`} style={{ color: "#fff" }}>
                Update
              </Link>
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete movie
            </button>
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
    )
  );
}

export default Movies_Details;
