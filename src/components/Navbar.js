import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

import useStyles from "../styles/NavbarStyles.js";

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <div className={classes.navLogo}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            MIGHT MINDS
                        </Typography>
                    </div>
                    <div className={classes.navLeft}>
                        <ul>
                            <li className={classes.navItem}>
                                <a href="/" className={classes.navLinks}>
                                    Home
                                </a>
                            </li>
                            <li className={classes.navItem}>
                                <a href="/" className={classes.navLinks}>
                                    Classes
                                </a>
                            </li>
                            <li className={classes.navItem}>
                                <a href="/" className={classes.navLinks}>
                                    Planner
                                </a>
                            </li>
                            <li className={classes.navItem}>
                                <a href="/" className={classes.navLinks}>
                                    School Data
                                </a>
                            </li>
                            <li className={classes.navItem}>
                                <a href="/" className={classes.navLinks}>
                                    Library
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.navRight}>
                        <a href="#" className={classes.navLinks}>
                            Help Center
                        </a>

                        <a href="#" className={classes.navLinks}>
                            Profile
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
