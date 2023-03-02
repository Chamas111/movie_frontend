import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateMovie() {
  const navigate = useNavigate();
  const { movie_id } = useParams();

  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: 0,
    country: "",
    url: "",
    duration: "0",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${movie_id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [movie_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovie({ ...movie, [name]: value });
  };

  /*   const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    console.log(checkedValue);
    if (checked) {
      setCheckedValue((pre) => [...pre, value]);
    } else {
      setCheckedValue((pre) => {
        return [...pre.filter((skill) => skill === value)];
      });
    }
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${movie_id}`,
        movie
      )
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div class="testbox">
        <form onSubmit={handleSubmit}>
          <div class="banner">
            <h1>Add Movie Form</h1>
          </div>
          <div class="item">
            <p>
              Movie title<span class="required">*</span>
            </p>
            <input
              type="text"
              name="title"
              value={movie.title}
              placeholder="Write your movie...."
              required
              onChange={handleChange}
            />
          </div>
          <div class="item">
            <p>
              Release date<span class="required">*</span>
            </p>
            <input
              type="int"
              name="year"
              placeholder="yyyy"
              value={movie.year}
              min="1990"
              max="2023"
              required
              onChange={handleChange}
            />
            <i class="fas fa-calendar-alt"></i>
          </div>

          <div class="item">
            <p>
              Country<span class="required">*</span>
            </p>
            <div class="city-item">
              <input
                type="text"
                name="country"
                placeholder="ex: USA or Canada ..."
                value={movie.country}
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="item">
            <p>
              Duraction<span class="required">*</span>
            </p>
            <input
              type="int"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              placeholder="write the duration time in minutes ex: 120 or 90"
            />
          </div>

          <div class="item">
            <p>
              Image Url<span class="required">*</span>
            </p>
            <input
              type="text"
              name="url"
              value={movie.url}
              onChange={handleChange}
              placeholder="paste Url image here..."
            />
          </div>

          <div class="question">
            <p>
              Movie genre:<span class="required">*</span>
            </p>

            <div class="question-answer checkbox-item">
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_1"
                  name="Drama"
                />
                <label for="check_1" class="check">
                  <span>Drama</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_2"
                  name="Horror"
                />
                <label for="check_2" class="check">
                  <span>Horror</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_3"
                  name="Crime"
                />
                <label for="check_3" class="check">
                  <span>Crime</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_4"
                  name="Fantasy"
                />
                <label for="check_4" class="check">
                  <span>Fantasy</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_5"
                  name="Action"
                />
                <label for="check_5" class="check">
                  <span>Action</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_6"
                  name="War"
                />
                <label for="check_6" class="check">
                  <span>War</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_7"
                  name="Romance"
                />
                <label for="check_7" class="check">
                  <span>Romance</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={movie.genre}
                  onChange={handleChange}
                  id="check_8"
                  name="Animation"
                />
                <label for="check_8" class="check">
                  <span>Animation</span>
                </label>
              </div>
            </div>
          </div>
          <br />

          <div class="btn-block">
            <button type="submit">Update Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateMovie;
