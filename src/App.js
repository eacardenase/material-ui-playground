import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { links } from "./Utils/data";

const theme = createTheme({
    palette: {
        primary: {
            main: "#c4d0f7",
        },
        secondary: {
            main: "#646282",
        },
    },
});

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, isOpen) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: isOpen });
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            News
                        </Typography>

                        <Button color="inherit" color="secondary">
                            Iniciar sesión
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer("left", false)}
                    onKeyDown={toggleDrawer("left", false)}
                >
                    <Divider />
                    <List>
                        {links.map(({ id, text, url, icon }) => (
                            <ListItem button key={id} href={url}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </ThemeProvider>
    );
}
