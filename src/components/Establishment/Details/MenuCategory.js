import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MenuItem from "./MenuItem";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
    container:{
      marginTop:'20px'
    },
    cat : {
        textAlign:'left',
        paddingLeft:'20px',
        fontWeight:'bold'
    },
    desc : {
        textAlign:'left',
        paddingLeft:'20px',
    }
});

const MenuCategory = (props) => {
    const {category} = props;
    const item = category.dishs.map(d => <MenuItem dish={d}/>)
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography className={classes.cat}>{category.category}</Typography>
            <Typography className={classes.desc} variant="body2" color='textSecondary' component='p'>{category.description}</Typography>
            <Paper>
                {item}
            </Paper>
        </div>
    )
};

export default  MenuCategory;