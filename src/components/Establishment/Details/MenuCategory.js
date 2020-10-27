import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MenuItem from "./MenuItem";

const MenuCategory = (props) => {
    const {category} = props
    const item = category.dishs.map(d => <MenuItem dish={d}/>)
    return(
        <div>
            <Typography>{category.category}</Typography>
            <Paper>
                {item}
            </Paper>
        </div>
    )
};

export default  MenuCategory;