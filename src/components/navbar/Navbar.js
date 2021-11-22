import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import { css } from "@emotion/react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar
                sx={css`
                    height: 60px;
                    justify-content: center;

                    background: rgba(15, 37, 81, 255);
                `}>
                <Toolbar>
                    <div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={css`
                                margin: 0 2em;
                            `}>
                            MIGHT MINDS
                        </Typography>
                    </div>
                    <span className="hr"></span>
                    <NavbarLeft />
                    <NavbarRight />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
