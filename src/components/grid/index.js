import React from "react";
import Grid from "@material-ui/core/Grid";

const CustomGrid = ({
    xs,
    md,
    container = false,
    item = false,
    children,
    spacing,
    direction = "row"
}) => {
    return (
        <Grid
            direction={direction}
            xs={xs}
            md={md}
            item={item}
            container={container}
            spacing={spacing}
        >
            {children}
        </Grid>
    );
};

export default CustomGrid;
