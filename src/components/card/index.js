import React from "react";

const Card = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "64px",
                alignItems: "center"
            }}
        >
            {children}
        </div>
    );
};

export default Card;
