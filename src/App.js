import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./auth";
import * as firebase from 'firebase';

import Home from "modules/home/index.js";
import Login from "modules/login/index.js";
import Signup from "modules/signup/index.js";
import CreateBook from "modules/books/create-book/index.js";
import DisplayBooks from "modules/books/display-books/index.js";
import NoPage from "no-page.js";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                
                <Router>
                    <Switch>
                        <authrouting exact path="/">
                            <Login />
                        </authrouting>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/books/create">
                            <CreateBook />
                        </Route>
                        <Route path="/books/edit">
                            <Login />
                        </Route>
                        <Route path="/books">
                            <DisplayBooks />
                        </Route>
                        <authrouting path="/home">
                            <Home />
                        </authrouting>
                        <Route path="*">
                            <NoPage />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>

        </div>
    );
}

export default App;
