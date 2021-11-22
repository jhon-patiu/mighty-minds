import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: "rgb(25, 37, 69) !important",
    },
    navLogo: {
        padding: "0 2em",
    },
    navLeft: {
        display: "flex",
        flex: "1",
    },
    navRight: {
        display: "flex",
        padding: "0 1em",
    },
    navLinks: {
        display: "flex",
        margin: "0 1em",
        textDecoration: " none",
        fontWeight: "600",
        color: "rgb(187, 187, 187)",
        transition: "300ms ease",

        "&:hover": {
            color: "#eee",
            borderBottom: "3px solid rgb(13, 98, 224)",
            transition: "100ms ease",
        },
    },
}));

export default useStyles;
