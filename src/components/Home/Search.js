import React from 'react'
import Drawer from "@material-ui/core/Drawer";

const Search = (props) => {
    const toggleDrawer = (o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setOpen(o);
    };

    return(
        <Drawer anchor={'right'} open={props.open} onClose={toggleDrawer(false)}>
            cccccccccc
        </Drawer>
    )
}

export default Search;