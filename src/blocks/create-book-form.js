import React, { useState } from "react";

import Container from "components/container";
import Form from "components/form";
import Card from "components/card";
import Text from "components/form-fields/text";

import CssBaseline from "@material-ui/core/CssBaseline";

import Button from "@material-ui/core/Button";
import app from '../base';

function writeUserData(author, price, image, seller, title){
    app.database().ref('users/' + seller).set({
        author : author,
        price : price,
        image : image,
        title});
}

const CreateBookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
   // const { Title, Author, Price,  } = event.target.elements;
    const handleSubmit = (evt) => {
        evt.preventDefault();

      
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
                        value={author}
                        onChange={setAuthor}
                        label="Author"
                        name="Author"
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
