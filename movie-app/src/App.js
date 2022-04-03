import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar/NavbarComponent";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import SeriesTV from "./Pages/SeriesTV/SeriesTV";

function App() {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/series' element={<SeriesTV />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
