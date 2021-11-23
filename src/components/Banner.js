import { Typography, Box, Container, Grid } from "@mui/material";
import { css } from "@emotion/react";
import CircleIcon from "@mui/icons-material/Circle";
import Buttons from "./controls/Buttons";

const Banner = () => {
    return (
        <Grid
            container
            sx={banner}
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid
                item
                sm={3}
                lg={2}
                sx={css`
                    @media (max-width: 825px) {
                        display: "none";
                    }
                `}>
                <img
                    src="./images/books_globe.png"
                    alt="books and globe"
                    style={{
                        maxWidth: "160px",
                        width: "auto",
                        margin: "2em 2em 0 2em",
                    }}
                />
            </Grid>

            <Grid
                item
                container
                xs={12}
                sm={9}
                lg={10}
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: { xs: "center", md: "start" },
                    border: "5px dashed hotpink",
                }}>
                <Box sx={bannerLeft}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ color: "#fff" }}>
                        Welcome back, Jasmine
                    </Typography>

                    <Typography variant="body2" color="lightgray" gutterBottom>
                        WEEK 4 ACTIVITY SUMMARY
                    </Typography>
                    <Box
                        display="flex"
                        color="#fff"
                        sx={{ justifyContent: { xs: "center", md: "start" } }}>
                        <span className="flex-row">
                            <CircleIcon
                                color="primary"
                                fontSize="small"
                                sx={{ margin: "0 5px 0 0" }}
                            />
                            <Typography variant="caption">
                                Due this week: 330
                            </Typography>
                        </span>
                        <span className="flex-row">
                            <CircleIcon
                                color="success"
                                fontSize="small"
                                sx={{ margin: "0 5px 0 15px" }}
                            />
                            <Typography variant="caption">
                                Completed: 240
                            </Typography>
                        </span>
                        <span className="flex-row">
                            <CircleIcon
                                color="error"
                                fontSize="small"
                                sx={{ margin: "0 5px 0 15px" }}
                            />
                            <Typography variant="caption">
                                Overdue: 33
                            </Typography>
                        </span>
                    </Box>
                </Box>

                <Box sx={bannerRight}>
                    <Buttons sx={{ width: "100%", height: "100%" }} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Banner;

const banner = css`
    border: 2px solid aqua;
    width: 100%;
    height: auto;
    min-height: 300px;
    background: rgba(15, 37, 81, 255);
`;

const bannerLeft = css`
    border: 3px solid lime;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em;
    @media (max-width: 1255px) {
        flex: 1;
    }
`;
const bannerRight = css`
    border: 5px solid red;
    width: auto;
    height: 100%;
    display: flex;

    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    flex: 1;
`;
