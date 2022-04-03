import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DrawerComponent from "./DrawerComponent";
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';


function NavbarComponent() {
    const [openDrawer, setOpenDrawer] = useState(true)
    const [value, setValue] = useState(0);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"))

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) navigate("/");
        if (value === 1) navigate("/trending");
        if (value === 2) navigate("/series");
    }, [value]);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <LiveTvIcon />
                    </IconButton>
                    {!isMatch &&
                        <Tabs value={value} onChange={handleChange} textColor="inherit">
                            <Tab icon={<MovieFilterIcon />} label="Movies" />
                            <Tab icon={<TrendingUpIcon />} label="Trending" />
                            <Tab icon={<LocalMoviesIcon />} label="TV Series" />
                        </Tabs>
                    }
                    {isMatch &&
                        <div className="menu-icon">
                            <MenuIcon onClick={setOpenDrawer} />
                        </div>
                    }
                </Toolbar>
            </AppBar>
            {isMatch && <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />}
        </>
    )
}

export default NavbarComponent