import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import {primary} from "../../../shared/colors";

const useStyles = makeStyles({
    name : {
        textAlign:'left',
        paddingLeft:'20px',
        fontWeight:'bold'
    },
    desc : {
        textAlign:'left',
        paddingLeft:'20px',
    },
    price: {
        textAlign:'left',
        paddingLeft:'20px',
        marginTop:'10px'
    },
    img : {
        width:'10vh',
        height:'10vh'
    },
    container:{
        position:'relative',
        margin:'10px auto auto auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'5px',
    },
    info:{
        position:'absolute',
        top:0,
        right:0,
        zIndex:1,
        padding:'5px',
        color:primary
    }
});


const MenuItem = (props) => {
    const {dish} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return(
        <div className={classes.container}>

        {/*<div className={classes.button}>*/}
            <div>
                <Typography className={classes.name}>{dish.name}</Typography>
                <Typography className={classes.desc} variant="body2" color='textSecondary' component='p'>{dish.description}</Typography>
                <Typography className={classes.price} variant="body2" color='textSecondary' component='p'>{dish.price}</Typography>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={`allergens : ${dish.allergens}`}
                        >
                            <IconButton className={classes.info} onClick={handleTooltipOpen}>
                                <InfoIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </ClickAwayListener>
            </div>
            <div>
                <img className={classes.img} src={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')}/>
            </div>
        {/*</div>*/}
        </div>
    )
};
export default MenuItem;