import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#2CA0C8',
        },
        secondary: {
            main: '#E9E9E9',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: "",
        h1: {
            fontSize: 28,
        },
        h4: {
            color: "#2CA0C8",
            fontWeight: "normal",
            fontSize: 20,
        },
        body1: {
            color: "#34495E"
        },
        subtitle1: {
            fontSize: 14,
            color: "#34495E",
            fontWeight: "normal",
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    padding: "6px 8px !important",
                    color: "#34495E",
                },
                root: {
                    borderColor: "#EFEFEF !important",
                    borderRadius: "10px !important",
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginBottom: 0
                }
            }
        },
    },
});

export default theme;
