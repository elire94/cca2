import React, { useState,  useContext, useEffect } from "react";

import Grid from "components/grid/index";

import Paper from "@material-ui/core/Paper";
import { AuthContext } from "../auth.js";
import * as firebase from 'firebase';
import Books from "../components/bookgrid/getbooks"


const BookList = () => {
    

    const [books, setBooks] = useState([]);
    const { currentUser } = useContext(AuthContext);
    
    useEffect(async () => {
        let resultBooks = await firebase.firestore().collection("books");
        const data = [];

        let queryBooks = resultBooks.where('seller', '==', 'brendan_judde@hotmail.com').get()

        .then(snapshot => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }  
        
            snapshot.forEach(doc => {
              data.push(doc.data());
              setBooks(data);

            });
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });

        
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
