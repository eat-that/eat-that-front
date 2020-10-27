import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const MenuItem = (props) => {
    const {dish} = props;
    return(
        <Paper>
            <Typography>{dish.name}</Typography>
            <Typography>{dish.description}</Typography>
            <Typography>{dish.price}</Typography>

        </Paper>
    )
};
export default MenuItem;