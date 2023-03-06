import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState([]);
  //const [genreCheked, setGenreChecked] = useState(false);
  const [year, setYear] = useState();
  const [url, setUrl] = useState('');
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(genre);
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`, {
        title,
        genre,
        year,
        url,
        country,
        duration,
      })
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div class='testbox'>
        <form onSubmit={handleSubmit}>
          <div class='banner'></div>
          <div class='item'>
            <p>
              Movie title<span class='required'>*</span>
            </p>
            <input
              type='text'
              name='name'
              value={title}
              placeholder='Write your movie....'
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class='item'>
            <p>
              Release date<span class='required'>*</span>
            </p>
            <input
              type='int'
              name='bdate'
              placeholder='yyyy'
              value={year}
              min='1990'
              max='2023'
              required
              onChange={(e) => setYear(e.target.value)}
            />
            <i class='fas fa-calendar-alt'></i>
          </div>

          <div class='item'>
            <p>
              Country<span class='required'>*</span>
            </p>
            <div class='city-item'>
              <input
                type='text'
                name='country'
                placeholder='ex: USA or Canada ...'
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div class='item'>
            <p>
              Duration<span class='required'>*</span>
            </p>
            <input
              type='int'
              name='name'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder='write the duration time in minutes ex: 120 or 90'
            />
          </div>

          <div class='item'>
            <p>
              Image Url<span class='required'>*</span>
            </p>
            <input
              type='text'
              name='name'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='paste Url image here...'
            />
          </div>

          <div class='item'>
            <p>
              Movie genre:<span class='required'>*</span>
            </p>
            <input
              type='text'
              name='name'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder='Movie Genre ex: Drama, Horror...'
            />
          </div>
          <br />

          <div class='btn-block'>
            <button
              type='submit'
              href='/'>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
