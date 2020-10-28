import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
    container:{
        margin:'10px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'5px'
    },
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
    }
});


const MenuItem = (props) => {
    const {dish} = props;
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div>
                <Typography className={classes.name}>{dish.name}</Typography>
                <Typography className={classes.desc} variant="body2" color='textSecondary' component='p'>{dish.description}</Typography>
                <Typography className={classes.price} variant="body2" color='textSecondary' component='p'>{dish.price}</Typography>
            </div>
            <div>
                <img className={classes.img} src={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')}/>
            </div>
        </div>
    )
};
export default MenuItem;