import React, { useState, useCallback } from "react";

import Container from "components/container";
import Icon from "components/icon";
import Form from "components/form";
import Card from "components/card";
import Text from "components/form-fields/text";

import CssBaseline from "@material-ui/core/CssBaseline";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import app from '../base';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = useCallback(
        async event => {
          event.preventDefault();
          const { Email, Password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(Email.value, Password.value);
          } catch (error) {
            alert(error);
          }
        },
      );
    return (
        <Container>
            <CssBaseline />

            <Card>
                <Icon circle backgroundColor="#bed0ff">
                    <LockOutlinedIcon color="primary" />
                </Icon>
                <h1>Sign in</h1>
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

                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Grid direction="column" container>
                        <Grid item xs>
                            <a
                                href="/forgot-password"
                                style={{
                                    textDecoration: "none",
                                    color: "#3f51b5"
                                }}
                            >
                                Forgot Pasword!
                            </a>
                        </Grid>
                        <Grid item>
                            <a
                                href="/signup"
                                style={{
                                    textDecoration: "none",
                                    color: "#3f51b5"
                                }}
                            >
                                Don't have an account? Sign up
                            </a>
                        </Grid>
                    </Grid>
                    </form>
                </Form>
            </Card>
        </Container>
    );
};
export default Login;
