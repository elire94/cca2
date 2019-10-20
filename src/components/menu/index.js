import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import app from "../../base";

function Logout(){
    app.auth().signOut()
}

const Menu = ({ current = "" }) => {
    return (
        <AppBar position="static">
            <Tabs variant="fullWidth">
                <Tab label="Home" active={current === "Home"} href="/" />
                <Tab label="My Books" active href="/books" />
                <Tab label="Add a Book" href="/books/create" />
                <button onClick={(Logout)} >Sign out</button>
            </Tabs>

        </AppBar>
        
    );
};
export default Menu;
