import React from "react";

import Grid from "components/grid/index";
import Image from "components/grid/image";
import Details from "components/grid/details";




const getbooks = ({ data }) => {
    if (!data)
    {
        return <div></div>
    }
    return data.map(book => (
        <Grid container direction="column" xs={6} md={4}>
            <Image src={book.image} />
            <Details title={book.title} author={book.author} price={book.price} />
        </Grid>
    ))
}
export default getbooks;
