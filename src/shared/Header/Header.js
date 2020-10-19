import React from 'react'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
console.log('here')
    return(
        <AppBar position='static'>
            <Toolbar>
                <EmojiPeopleIcon/>
            </Toolbar>
        </AppBar>
    )
}

 export default Header;