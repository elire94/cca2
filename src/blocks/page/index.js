import React, { Children } from "react";
import Menu from "components/menu";
import Main from "components/main";
import { AuthContext } from "../../auth.js";

const Page = ({ current = "", children }) => {
    
    return (
        <Main>
            <Menu current />
            {children}
        </Main>
    );
};
export default Page;
