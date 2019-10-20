import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import Container from "components/container";
import Form from "components/form";
import Card from "components/card";
import Text from "components/form-fields/text";

import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthContext } from '../auth.js';

import Button from "@material-ui/core/Button";
import * as firebase from 'firebase';

const CreateBookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("$");
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const currentUser = useContext(AuthContext);
    var mySon = JSON.stringify(currentUser.currentUser);
    var jsonObj = JSON.parse(mySon);
   // var email = jsonObj["email"];
    console.log(jsonObj);

    const handleSubmit = (evt) => {
        const { Title, Author, Price, Image, Email } = evt.target.elements;
        evt.preventDefault();

        let addDoc = firebase.firestore().collection('books').add({
            author: Author.value,
            image: Image.value,
            price: Price.value,
           seller: Email.value,
            title: Title.value
        }).then(ref =>{
                console.log('Added the book: ', ref.id);
            });

        if(addDoc){
            return <Redirect to="/home" />;
        }
      
    }
    return (
        <Container>
            <CssBaseline />

            <Card>
                <h1>Create Books</h1>
                <Form>
                <form onSubmit={handleSubmit}>

                    <Text
                        value={title}
                        onChange={setTitle}
                        label="Title"
                        name="Title"
                    />
                    <Text
                        value={author}
                        onChange={setAuthor}
                        label="Author"
                        name="Author"
                    />
                    <Text
                        value={price}
                        onChange={setPrice}
                        label="Price"
                        name="Price"
                    />
                    <Text
                        value={image}
                        onChange={setImage}
                        label="Image URL"
                        name="Image"
                    />

                    <Text
                        value={email}
                        onChange={setEmail}
                        label="Confirm Email"
                        name="Email"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Create
                    </Button>
                    </form>
                </Form>
            </Card>
        </Container>
    );
};
export default CreateBookForm;
