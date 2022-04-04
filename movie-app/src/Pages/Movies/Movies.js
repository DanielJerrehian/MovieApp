import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import ContentDetails from '../../components/ContentDetails/ContentDetails'

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    async function fetchMovies() {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=c8c440f86d54a1be2801aacd683cccf4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
            );
            const results = data?.results
            console.log(results)
            setMovies(results)
            setLoading(false);
        }
        catch (error) {
            console.error(error);
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    return (
        <Grid container direction="row" justify="center" alignItems="center">
            {movies?.map(
                movie => 
                    <Grid item md={6}>
                        <ContentDetails movie={movie} />
                    </Grid>
            )}
        </Grid>
    )
}

export default Movies