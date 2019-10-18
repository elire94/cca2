import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
    }
    static defaultProps = {
        primary: false,
        secondary: false,
        onInput: () => null,
        label: null,
        disabled: false,
        required: false,
        value: "",
        type: ""
    };

    handleFocused = () => {
        this.setState({ focused: !this.state.focused });
    };
    handleOnInput = e => {
        this.props.onInput(e.target.value);
    };

    render() {
        const { label, value, disabled, required, type } = this.props;
        var { primary, secondary } = this.props;
        const outlined = primary
            ? " standard"
            : secondary
            ? "outlined"
            : "standard";

        return (
            <TextField
                variant={outlined}
                margin="normal"
                required={required}
                disabled={disabled}
                fullWidth
                label={label}
                name={label}
                autoComplete={type}
                autoFocus
                value={value}
            />
        );
    }
}

export default Text;
