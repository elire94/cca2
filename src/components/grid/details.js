import React from "react";
import Grid from "./index";
import Typography from "@material-ui/core/Typography";

const Details = ({ title = "", author = "", price = "" }) => {
    return (
        <Grid container xs={6}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                    {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {price}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variasnt="body2" style={{ cursor: "pointer" }}>
                    Add to Cart
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Details;
