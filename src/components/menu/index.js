import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import app from "../../base";
import { withRouter, Redirect } from "react-router";



/*wrapperFunction = () => {
    //do something
    app.auth().signOut();
    //do something
   return <Redirect to="/home" />;
}*/


const Menu = ({ current = "" }) => {
    return (
        <AppBar position="static">
            <Tabs variant="fullWidth">
                <Tab label="Home" active={current === "Home"} href="/" />
                <Tab label="My Books" active href="/books" />
                <Tab label="Sell Book" href="/books/create" />
                <button onClick={() => app.auth().signOut()}  >Sign out</button>
            </Tabs>

        </AppBar>
        
    );
};
export default Menu;
