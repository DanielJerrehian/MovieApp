import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';


function Genres(props) {
    async function fetchGenres() {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=c8c440f86d54a1be2801aacd683cccf4&language=en-US`
        const { data } = await axios.get(url);
        props.setGenres(data?.genres);

    }

    useEffect(() => {
        fetchGenres();
    }, []);

    function handleClick(genre) {
        props.setSelectedGenres(prevSelectedGenres => ([...prevSelectedGenres, genre]))
        props.setGenres(props.genres?.filter(g => g?.id !== genre?.id))
    }

    function handleDelete(genre) {
        props.setSelectedGenres(props.selectedGenres?.filter(selected => selected?.id !== genre?.id))
        props.setGenres([...props.genres, genre])
    }

    return (
        <div style={{ padding: '10px 0px', margin: '10px 10px' }}>
            {props.selectedGenres?.map(genre => (
                <Chip
                    clickable
                    onDelete={() => handleDelete(genre)}
                    key={genre?.id}
                    label={genre?.name}
                    style={{ backgroundColor: "white", color: 'black', fontSize: "1.2em", margin: "5px" }}
                />
            ))}
            {props.genres?.map(genre => (
                <Chip
                    clickable
                    key={genre?.id}
                    label={genre?.name}
                    onClick={() => handleClick(genre)}
                    color='secondary'
                    style={{
                        fontSize: "1.2em",
                        margin: "5px"
                    }}
                />
            )
            )}
        </div>
    )
}

export default Genres
