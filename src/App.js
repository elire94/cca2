import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "modules/home/index.js";
import Login from "modules/login/index.js";
import Signup from "modules/signup/index.js";
import CreateBook from "modules/books/create-book/index.js";
import DisplayBooks from "modules/books/display-books/index.js";
import NoPage from "no-page.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
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
                    <Route path="*">
                        <NoPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
