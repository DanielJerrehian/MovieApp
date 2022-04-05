import { createTheme } from '@mui/material/styles';

const theme = createTheme({    
    palette: {
        primary: {
            main:"#14213d",
        },
        secondary: {
            main:"#A22032",
        },
        common: {
            drawer: "#A22032",
        },
        string: {
            main: "#fff"
        }
    },
});

export default theme