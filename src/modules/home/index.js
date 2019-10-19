import React from "react";
import Page from "blocks/page";
import BookList from "blocks/book-list";
import { AuthContext } from "../../auth.js";




const Home = () => {


    return (

        <Page>
            <BookList />
        </Page>
    );
};
export default Home;
