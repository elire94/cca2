import React from "react";
import Grid from "components/grid/index";
import Image from "components/grid/image";
import Details from "components/grid/details";
import Paper from "@material-ui/core/Paper";

import ImageSrc from "assets/mitch.jpg";

const data = [
    [ImageSrc, "Book1", "Author1", "$12.99"],
    [ImageSrc, "Book2", "Author2", "$15.99"],
    [ImageSrc, "Book3", "Author3", "$22.99"],
    [ImageSrc, "Book4", "Author4", "$33.99"],
    [ImageSrc, "Book5", "Author5", "$17.99"],
    [ImageSrc, "Book6", "Author6", "$56.99"]
];

const BookList = () => {
    const books = data.map(book => (
        <Grid container direction="column" xs={6} md={4}>
            <Image src={book[0]} />
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
