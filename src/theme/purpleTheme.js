import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#7FDFF0'
        },
        secondary:{
            main: '#F0B27F'
        },
        error:{
            main: red.A400
        },
    }
})