import React from "react";
import Grid from "components/grid/index";
import Image from "components/grid/image";
import Details from "components/grid/details";
import Paper from "@material-ui/core/Paper";
import * as firebase from 'firebase';
import ImageSrc from "assets/mitch.jpg";

const BookList = () => {
    const data = [];
let citiesRef = firebase.firestore().collection('books');
let allCities = citiesRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      data.push(doc.data());
      console.log(data);
    });
  })
    const books = data.map(book => (    
        <Grid container direction="column" xs={6} md={4}>
            <Image src={book[1]} />
            <Details title={book[1]} author={book[2]} price={book[3]} />
        </Grid>
    ));
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
