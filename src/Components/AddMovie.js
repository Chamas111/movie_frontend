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

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setGenre([...genre, value]);
    }
  };

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
          <div class='banner'>
            <h1>Add Movie Form</h1>
          </div>
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

          <div class='question'>
            <p>
              Movie genre:<span class='required'>*</span>
            </p>

            <div class='question-answer checkbox-item'>
              <div>
                <input
                  type='checkbox'
                  value='Drama'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_1'
                  name='checklist'
                />
                <label
                  for='check_1'
                  class='check'>
                  <span>Drama</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Horror'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_2'
                  name='checklist'
                />
                <label
                  for='check_2'
                  class='check'>
                  <span>Horror</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Crime'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_3'
                  name='checklist'
                />
                <label
                  for='check_3'
                  class='check'>
                  <span>Crime</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Fantasy'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_4'
                  name='checklist'
                />
                <label
                  for='check_4'
                  class='check'>
                  <span>Fantasy</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Action'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_5'
                  name='checklist'
                />
                <label
                  for='check_5'
                  class='check'>
                  <span>Action</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='War'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_6'
                  name='checklist'
                />
                <label
                  for='check_6'
                  class='check'>
                  <span>War</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Romance'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_7'
                  name='checklist'
                />
                <label
                  for='check_7'
                  class='check'>
                  <span>Romance</span>
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  value='Animation'
                  htmlFor=''
                  onChange={handleChange}
                  id='check_8'
                  name='checklist'
                />
                <label
                  for='check_8'
                  class='check'>
                  <span>Animation</span>
                </label>
              </div>
            </div>
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
