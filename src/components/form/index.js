import React from "react";

const onSubmit = e => {
    e.preventDefault();
};

const Form = ({ children }) => {
    return (
        <form
            style={{
                width: "100%"
            }}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};

export default Form;
