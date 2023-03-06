import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };
  return (
    movie && (
      <>
        <div
          className='text-start'
          style={{ backgroundColor: '#f3f1f1' }}>
          <div className='container'>
            <div className='___video'>
              <video
                className='__video'
                poster={movie.url}
                loop='loop'
                controls='controls'>
                <source
                  src='https://s3.amazonaws.com/'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <div class='card card-details p-3'>
              <div class='card-body'>
                <div class='d-flex gap-5'>
                  <div class='d-flex'>
                    <img
                      src={movie.url}
                      style={{
                        width: '250px',
                        height: '367px',
                        borderRadius: '10px',
                      }}
                      alt='movieimg'
                    />
                  </div>
                  <div>
                    <div class='mt-2'>
                      <button
                        type='button'
                        className='btn'
                        style={{
                          backgroundColor: '#3e8afa',
                          borderRadius: '30px',
                          color: '#fff',
                        }}>
                        Watch now
                      </button>
                    </div>
                    <div className='d-md-flex align-items-start flex-column mb-3 mt-5 g-row-3'>
                      <h2
                        style={{
                          fontFamily: 'Roboto, Arial',
                          lineHeight: '48.75px',
                        }}>
                        {movie?.title}
                      </h2>

                      <button className='mb-3'>
                        <i class='bi bi-camera-reels'>
                          <strong>&nbsp;Trailer</strong>
                        </i>
                      </button>

                      <p>
                        At the Silver Creek boarding school for girls in the
                        Australian outback, students are largely left to their
                        own devices in their spare time. This series tells the
                        gripping and unsparing story of how the desire to belong
                        sets in motion a cruel dynamic.
                      </p>
                      <div class='container'>
                        <div class='row'>
                          <div class='col text-start'>
                            Released: {movie.year}
                          </div>
                          <div class='col text-start'>
                            Genre: {movie.genre.replace(/[^\w\s,]/gi, '')}
                          </div>
                        </div>
                      </div>

                      <div class='container'>
                        <div class='row '>
                          <div class='col text-start'>
                            Duration: {movie.duration} min
                          </div>
                          <div class='col text-start'>
                            Country: {movie.country}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-sm-flex align-items-center justify-content-center gap-3 pb-4'>
            <button className='btn btn-success'>
              <Link
                to={`/movies/${movie_id}/update`}
                style={{ color: '#fff' }}>
                Update
              </Link>
            </button>
            <button
              onClick={handleDelete}
              className='btn btn-danger'>
              Delete movie
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default Movies_Details;
