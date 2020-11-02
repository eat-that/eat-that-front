import React from 'react'
import makeStyles from "@material-ui/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {background, primary, secondary} from "../../../shared/colors";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RoomIcon from '@material-ui/icons/Room';
import StarRateIcon from '@material-ui/icons/StarRate';
import {Link, useHistory} from 'react-router-dom';
import Menu from "./Menu";
import ShowOnScroll from "../../../shared/ShowOnScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles({
    backButton:{
        position:'absolute',
        top:'10px',
        left:'10px',
        backgroundColor:primary,
        borderRadius: '50%',
        padding:'5px',
        color:'white'
    },
    favButton:{
        position:'absolute',
        top:'10px',
        right:'10px',
        backgroundColor:primary,
        borderRadius: '50%',
        padding:'5px',
        color:'white'
    },
    img : {
        height:'20vh',
        width:'100%'
    },
    paper : {
        margin:'5px 0 5px 0',
        borderRadius:'0px'
    },
    name:{
        color:primary,
        padding:'5px 5px 5px 20px',
        textAlign: 'left'
    },
    p : {
        textAlign:'left',
        padding:'10px 10px 10px 20px',
        display:'flex',
        alignItems:'center'
    },
    infos : {
        color:secondary,
        textAlign:'left',
        padding:'10px 10px 10px 20px'
    },
    navBar:{
        background:background,
    },
    toolBar:{
        display:'flex',
        justifyContent:'space-between',
        color:'white'
    },
    icon:{
        color:'white'
    }
});

const EstablishmentDetail = (props) => {
    console.log(props)
    const {establishment} = props.location.state;
    const classes= useStyles();
    const history = useHistory();

    return(
    <>
        <ShowOnScroll {...props}>
            <AppBar className={classes.navBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton  onClick={() => history.goBack()}>
                        <ArrowBackIcon className={classes.icon}/>
                    </IconButton>
                    <Typography>{establishment.name}</Typography>
                    <Link
                          to={{
                              pathname:'/establishmentDetailSearch',
                              state:{establishment:establishment}
                          }}>
                        <IconButton  onClick={() => console.log('search')}>
                            <SearchIcon className={classes.icon}/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </ShowOnScroll>

        <div>
            <IconButton className={classes.backButton} onClick={() => history.goBack()}>
                <ArrowBackIcon/>
            </IconButton>
            <IconButton className={classes.favButton}>
                <FavoriteBorderIcon/>
            </IconButton>
            <img className={classes.img} src={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')} alt='picture'/>
            <Paper className={classes.paper}>
                <Typography className={classes.name} variant='h4' component='h2' color='textPrimary'>{establishment.name}</Typography>
                <Typography className={classes.p} variant="body2" color='textSecondary' component='p'>
                    {establishment.description}
                </Typography>
                <Typography className={classes.p} color='textSecondary'>
                    {establishment.score}<StarRateIcon/>
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Typography variant='h6' className={classes.infos}>
                    Informations sur l'établissement
                </Typography>
                <Typography className={classes.p} variant="body2" color='textSecondary' component='p'>
                    <RoomIcon/> {establishment.address}
                </Typography>
            </Paper>
            <Menu establishment={establishment} />
        </div>
    </>
    )
}

export default  EstablishmentDetail