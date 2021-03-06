import React from 'react';
import { useNavigate } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


function DrawerComponent({ openDrawer, setOpenDrawer }) {
    const navigate = useNavigate();

    function navigatePage(link) {
        function handleClick() {
            navigate(`/${link}`);
            setOpenDrawer(false);
        }
        return () => handleClick()
    };

    return (
        <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="right"
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MovieFilterIcon />
                    </ListItemIcon>
                    <div className="list-item-text">
                        <ListItemText 
                            onClick={navigatePage("")}
                            primary="Movies"
                        />
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <TrendingUpIcon />
                    </ListItemIcon>
                    <div className="list-item-text">
                        <ListItemText 
                            onClick={navigatePage("trending")}
                            primary="Trending"
                        />
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LocalMoviesIcon />
                    </ListItemIcon>
                    <div className="list-item-text">
                        <ListItemText 
                            onClick={navigatePage("series")}
                            primary="TV Series"
                        />
                    </div>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default DrawerComponent