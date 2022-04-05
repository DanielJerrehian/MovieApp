import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import Genres from '../../components/Genres/Genres'
import ContentDetails from '../../components/ContentDetails/ContentDetails'
import AppPagination from "../../components/Pagination/AppPagination"
import createGenreIds from '../../utils/genres';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import ErrorComponent from '../../components/Errors/ErrorComponent';


function Movies() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [page, setPage] = useState([1]);
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const genreIds = createGenreIds(selectedGenres)

    async function fetchMovies() {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=c8c440f86d54a1be2801aacd683cccf4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=${genreIds}`
            );
            setMovies(data?.results)
            setPageCount(data?.total_pages)
            setLoading(false);
        }
        catch (error) {
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [page, selectedGenres])


    return (
        <>
            {loading ? <LoadingComponent /> : isError ? <ErrorComponent /> : (
                <>
                    <Genres
                        genres={genres}
                        setGenres={setGenres}
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                    />
                    <Grid container direction="row" justify="center" alignItems="center">
                        {movies?.map(
                            movie =>
                                <Grid key={movie?.id} item md={6}>
                                    <ContentDetails key={movie?.id} movie={movie} />
                                </Grid>
                        )}
                    </Grid>
                    <AppPagination setPage={setPage} page={page} pageCount={pageCount} />
                </>

            )}
        </>
    )
}

export default Movies