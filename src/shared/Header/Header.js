import React from 'react'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search'
import makeStyles from "@material-ui/core/styles/makeStyles";
import PersonIcon from '@material-ui/icons/Person';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    navBar:{
        borderRadius: '0 0 10px 10px'
    },

    navBarContent:{
        display:'flex',
        flexDirection:'column',
        width:'100%'
    },

    row1:{
        display:'flex',
        justifyContent:'space-between'
    },

    row2:{
        display:'flex',
        justifyContent:'space-between'
    },

    inputContainer:{
        width:'90%'
    },
    input:{
        color:'white',
        width:'80%'
    },


    button:{
        color:'white',
    },
    icon:{
        color:'white'
    },
}));
const Header = () => {

    const classes = useStyles();

    return(
        <AppBar position='static' className={classes.navBar}>
            <Toolbar>
                <div className={classes.navBarContent}>

                    <div className={classes.row1}>
                        <Button className={classes.button}>
                            <EmojiPeopleIcon className={classes.icon}/>
                            Votre position
                        </Button>
                        <IconButton className={classes.icon}>
                            <PersonIcon/>
                        </IconButton>
                    </div>

                <div className={classes.row2}>
                    <span className={classes.inputContainer}>
                        <InputBase
                            className={classes.input}
                              placeholder="Que souhaitez-vous manger ?"
                          />
                        <IconButton type="submit" className={classes.icon}>
                            <SearchIcon />
                        </IconButton>
                    </span>
                    <IconButton className={classes.icon}>
                        <FilterListIcon/>
                    </IconButton>
                </div>

                </div>
            </Toolbar>
        </AppBar>
    )
}

 export default Header;