import React from "react";

const Container = ({ children }) => {
    return (
        <div style={{ margin: "0 auto", padding: "0 32px", maxWidth: "500px" }}>
            {children}
        </div>
    );
};

export default Container;
