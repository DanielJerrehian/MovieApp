import React from 'react'
import Button from '@mui/material/Button';
import { movieImage } from '../../utils/movieImage';



function ContentDetails({ movie }) {
    return (
        <div className="card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={`${movieImage}/${movie?.poster_path}`} />
                    <h1>{movie?.title}</h1>
                    <h4>{movie?.release_date}</h4>
                    <span className="minutes">{movie?.vote_average}</span>
                </div>
                <div className="movie_desc">
                    <p className="text">{movie?.overview}</p>
                </div>
                    <div style={{ marginLeft: "25px" }}>
                        <Button variant="outlined" color="secondary">
                            Watch Trailer
                        </Button>
                    </div>
            </div>
            <div className="blur_back bright_back">
                <img src={`${movieImage}/${movie?.backdrop_path}`} />
            </div>
        </div>
    )
}

export default ContentDetails