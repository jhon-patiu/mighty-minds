import { Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const Buttons = () => {
    return (
        <div>
            <span>
                <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                        color: "white",
                        border: "1px solid white",
                        margin: "0 .5em",
                    }}>
                    My Calendar
                </Button>
            </span>
            <span>
                <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                        color: "white",
                        border: "1px solid white",
                        margin: "0 .5em",
                    }}>
                    Weekly Report
                </Button>
            </span>

            <span className="split-btn">
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{
                                    margin: "0 .25em",
                                    borderRadius: "5px 0 0 5px",
                                }}>
                                <AddIcon />
                                Assign Activity
                            </Button>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ borderRadius: " 0 5px 5px 0" }}
                                {...bindTrigger(popupState)}>
                                <ExpandMoreIcon />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    Sample Activity #1
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    Sample Activity #2
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    Sample Activity #3
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </PopupState>
            </span>
        </div>
    );
};

export default Buttons;
