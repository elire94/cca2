import React from "react";

const Icon = ({ circle, backgroundColor, children }) => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                margin: "8px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: circle && "50%"
            }}
        >
            {children}
        </div>
    );
};

export default Icon;
