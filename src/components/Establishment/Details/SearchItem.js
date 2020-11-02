import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {background, secondary} from "../../../shared/colors";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from 'react-router-dom';
import EstablishmentList from "../Card/EstablishmentList";
import Menu from "./Menu";

const useStyles = makeStyles({
    searchBar:{
        background:background,
        width:'100%',
        position:'relative',
        borderRadius:'0 0 10px 10px'
    },
    input:{
      background:secondary,
        margin:'10px',
        width:'65%',
        borderRadius: '5px'
    },
    backButton:{
        position:'absolute',
        top:'3%',
        left:0
    },
    icon:{
        color:'white'
    }
})

const SearchItem = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const input = React.useRef();
    const {establishment} = props.location.state;
    const [filteredMenu,setFilteredMenu] = useState({...establishment})

    const handleSearch = () => {
        const copyEstablishment = {...establishment};
        const search = input.current.value;
        const filteredCategory = []
         //Filter by category or by item of a category
         copyEstablishment.menu.map(category =>{
            if(search === '' || category.category.toLowerCase().includes(search.toLowerCase())){
                filteredCategory.push(category)
            } else if (category.dishs.find(d => d.name.toLowerCase().includes(search.toLowerCase()))){
                const copyCategory = {...category}
                copyCategory.dishs = copyCategory.dishs.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
                filteredCategory.push(copyCategory)
            }
         });

        copyEstablishment.menu = filteredCategory;
        setFilteredMenu(copyEstablishment)
    }


    return(
        <>
        <div className={classes.searchBar}>
            <IconButton  className={classes.backButton} onClick={() => history.goBack()}>
                <ArrowBackIcon className={classes.icon}/>
            </IconButton>
            <TextField inputRef={input} className={classes.input} onChange={handleSearch}/>
        </div>
            <Menu establishment={filteredMenu}/>
        </>
    )
}

export default SearchItem;