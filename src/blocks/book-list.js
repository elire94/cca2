import React, { useState, useCallback, useContext } from "react";

import Grid from "components/grid/index";
import Image from "components/grid/image";
import Details from "components/grid/details";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "../auth.js";
import * as firebase from 'firebase';
import app from "../base";

import ImageSrc from "assets/mitch.jpg";


const data = [];
const BookList = () => {
    var promise = firebase.firestore().collection("books").get();
    promise.then(snapshot => {
            snapshot.forEach(doc => {
                data.push(doc.data());
            });
        })

    const books = data.map(book => (
        <Grid container direction="column" xs={6} md={4}>
            <Image src={book.image} />
            <Details title={book.title} author={book.author} price={book.price} />
        </Grid>
    ))
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    console.log(books);

    return (

        <Paper
            style={{
                padding: "16px",
                margin: "auto",
                flexGrow: 1
            }}
        >
            <Grid container spacing={3}>
                {books}

            </Grid>
        </Paper>

    );
};
export default BookList;
