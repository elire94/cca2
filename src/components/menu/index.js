import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Menu = ({ current = "" }) => {
    return (
        <AppBar position="static">
            <Tabs variant="fullWidth">
                <Tab label="Home" active={current === "Home"} href="/" />
                <Tab label="My Books" active href="/books" />
                <Tab label="Sell Book" href="/books/create" />
                <Tab label="Login" href="login" />
                <Tab label="Signup" href="signup" />
            </Tabs>
        </AppBar>
    );
};
export default Menu;
