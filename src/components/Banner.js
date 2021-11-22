import { Typography, Box, Container } from "@mui/material";
import { css } from "@emotion/react";
import CircleIcon from "@mui/icons-material/Circle";
import Buttons from "./Buttons";

const Banner = () => {
    return (
        <Box sx={banner}>
            <img
                src="./images/books_globe.png"
                alt="books and globe"
                style={{ width: "160px", margin: "2em 2em 0 2em" }}
            />

            <Container sx={bannerContent}>
                <Box sx={bannerLeft}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ color: "#fff" }}
                        mb={5}>
                        Welcome back, Jasmine
                    </Typography>

                    <Typography variant="body2" color="lightgray" gutterBottom>
                        WEEK 4 ACTIVITY SUMMARY
                    </Typography>
                    <Box display="flex" color="#fff">
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
                    <Buttons />
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;

const banner = css`
    border: 2px solid aqua;
    display: flex;
    flexwrap: wrap;
    width: 100%;
    height: auto;
    min-height: 200px;
    background: rgba(15, 37, 81, 255);
    margin-top: 60px;
    padding: 0 3em;
    @media (max-width: 520px) {
        flex-direction: column;
    } ;
`;

const bannerContent = css`
    border: 1px solid red;
    width: 100%;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5em;
`;

const bannerLeft = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid pink;
`;

const bannerRight = css``;
