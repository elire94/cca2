import React from "react";
import Grid from "./index";
import ButtonBase from "@material-ui/core/ButtonBase";

const Item = ({ width = 128, height = 128, alt = "", src = "" }) => {
    return (
        <Grid item xs={6}>
            <ButtonBase style={{ width: width, height: height }}>
                <img
                    alt={alt}
                    src={src}
                    style={{
                        margin: "auto",
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "100%"
                    }}
                />
            </ButtonBase>
        </Grid>
    );
};

export default Item;
