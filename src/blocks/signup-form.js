import React, { useState } from "react";

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

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
      
    }
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
                        value={firstName}
                        onChange={setFirstName}
                        label="First Name"
                        name="First Name"
                    />
                    <Text
                        value={lastName}
                        onChange={setLastName}
                        label="Last Name"
                        name="Last Name"
                    />
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
