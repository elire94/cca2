import React from "react";

const Main = ({ children }) => {
    return (
        <main style={{ width: "100%", margin: "0 auto" }} role="main">
            {children}
        </main>
    );
};

export default Main;
