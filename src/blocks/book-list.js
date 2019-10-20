import React, { useState, useCallback, useContext, useEffect } from "react";

import Grid from "components/grid/index";
import Image from "components/grid/image";
import Details from "components/grid/details";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "../auth.js";
import * as firebase from 'firebase';
import app from "../base";
import Books from "../components/bookgrid/getbooks"
import ImageSrc from "assets/mitch.jpg";


const BookList = () => {
    
     
    const [books, setBooks] = useState([]);
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    useEffect(async () => {
        const result = await firebase.firestore().collection("books").get();
        const data = [];
        result.forEach(doc => data.push(doc.data()));
        setBooks(data);
    }, []);
    return (
        <Paper
            style={{
                padding: "16px",
                margin: "auto",
                flexGrow: 1
            }}
        >
            <Grid container spacing={3}>
                <Books data={books}></Books>
            </Grid>
        </Paper>

    );
};
export default BookList;
