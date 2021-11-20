import { createTheme } from '@material-ui/core/styles';

//common colors used throughout
const arcBlue = "#0d72bb";
const arcOrange = "#FFBA60";
export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Railway",
            textTransform: "none", // deactivates the tabs uppercase font feature
            fontWeight: "700",  //this has to be specified in the font import in public/index.html for Railway
            fontSize: "1rem",   //use rem instead of px to make consistent on different displays
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    }
})