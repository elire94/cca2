import React, { useState, useCallback } from "react";
import { Redirect } from 'react-router-dom';
import Container from "components/container";
import Icon from "components/icon";
import Button from "@material-ui/core/Button";
import Form from "components/form";
import Card from "components/card";
import Text from "components/form-fields/text";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import app from '../base';

function reDirect(){
    //this.props.history.push('/');
}

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = useCallback(async evt => {
        evt.preventDefault();
        const { Email, Password } = evt.target.elements;
        try{
            await app
            .auth()
        .createUserWithEmailAndPassword(Email.value, Password.value);
        reDirect();
        }catch(error){
            alert(error);
        }});
    return (
        <Container>
            <CssBaseline />
            <Card>
                <Icon circle backgroundColor="#bed0ff">
                    <LockOutlinedIcon color="primary" />
                </Icon>
                <h1>Sign Up</h1>

                <Form>
                <form onSubmit={handleSubmit}>
                    <Text
                        value={email}
                        onChange={setEmail}
                        label="Email"
                        name="Email"
                    />
                    <Text
                        value={password}
                        onChange={setPassword}
                        label="Password"
                        name="Password"
                        password
                    />
                    <Text
                        value={passwordConfirm}
                        onChange={setPasswordConfirm}
                        label="Confirm Password"
                        name="Confirm Password"
                        password
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                value={rememberMe}
                                onChange={setRememberMe}
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                    <Grid direction="column" container>
                        <Grid item>
                            <a
                                href="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "#3f51b5"
                                }}
                            >
                                Already have an account? Sign in
                            </a>
                        </Grid>
                    </Grid>
                    </form>
                </Form>
            </Card>
        </Container>
    );
};

export default SignUp;
