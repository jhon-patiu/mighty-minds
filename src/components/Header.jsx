import { Box, Container, Hidden, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircleIcon from "@mui/icons-material/Circle";
import Buttons from "./controls/Buttons";
const useStyles = makeStyles((theme) => ({
    header: {
        minHeight: "300px",
        height: "auto",
        width: "100%",
        background: "rgba(15,37,81,255)",
        color: "#fff",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
            height: "60vh",
        },
    },
    content: {
        width: "auto",
        height: "100%",
        alignItems: "center",

        [theme.breakpoints.down("lg")]: {
            justifyContent: "space-around",
        },
        [theme.breakpoints.down("md")]: {
            alignItems: "start",
        },
    },
    statsDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
        width: "100%",
        padding: "0 2em",
        [theme.breakpoints.down("lg")]: {
            alignItems: "center",
            padding: 0,
        },
    },
    stats: {
        marginRight: "1em",
        display: "flex",

        [theme.breakpoints.down("md")]: {
            flexDirection: "row",
            padding: 0,
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    btn: {
        display: "flex",
        height: "auto%",
        width: "100%",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
            padding: "2em 0",
        },
        [theme.breakpoints.down("md")]: {
            padding: "2em 3em",
        },
    },
}));

const Header = () => {
    const styles = useStyles();
    return (
        <>
            <Box className={styles.header}>
                <Container fixed disableGutters>
                    {/* PARENT GRID */}
                    <Grid container>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            className={styles.content}>
                            <div>
                                <Typography variant="h4" gutterBottom>
                                    Welcome back, Jasmine
                                </Typography>
                            </div>

                            <div item className={styles.statsDiv}>
                                <div>
                                    <p>WEEK 4 ACTIVITY SUMMARY</p>
                                </div>
                                <div className={styles.stats}>
                                    <span>
                                        <CircleIcon
                                            fontSize="small"
                                            color="info"
                                        />
                                        Due this week: 330
                                    </span>
                                    <span>
                                        <CircleIcon
                                            fontSize="small"
                                            color="success"
                                        />
                                        Completed: 240
                                    </span>
                                    <span>
                                        <CircleIcon
                                            fontSize="small"
                                            color="error"
                                        />
                                        Overdue: 33
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className={styles.btn}>
                            <Buttons />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Header;
