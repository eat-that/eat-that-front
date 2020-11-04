import React, {useRef, useState} from 'react'
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles({
    drawerPaper:{
        display:'flex',
        flexDirection:'column',
        width:'70%',
        maxWidth:'400px'
    },
    item:{
        margin:'20px 5px 20px 5px'
    }
})
const Search = (props) => {
    const toggleDrawer = (o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setOpen(o);
    };

    const handleChange = (event) => {
    }

    const establishmentType = ['Restaurant','Bar'];
    const establishmentTypeControl = establishmentType.map(eT =>
        <FormControlLabel
            control={<Checkbox onChange={handleChange} name={eT}/>}
            label={eT}
        />
     )

    const healthyType = ['Healthy','Moyen','Gras'];
    const healthyTypeControl = healthyType.map(hT =>
        <FormControlLabel
            control={<Checkbox onChange={handleChange} name={hT}/>}
            label={hT}
        />
    )

    const others = ['Végetarien','Végan','Sans gluten','Sans lactose'];
    const othersControl = others.map(a =>
        <FormControlLabel
            control={<Checkbox onChange={handleChange} name={a}/>}
            label={a}
        />
    )

    // const [chipSearch,setChipSearch] = useState([
    // ])

    // const chip = chipSearch.map(c => <Chip label={c}/>)

    const input = useRef()
    const classes = useStyles();

    return(
        <Drawer anchor={'right'} open={props.open} onClose={toggleDrawer(false)} classes={{paper:classes.drawerPaper}}>
            <TextField inputRef={input} onChange={handleChange} label='Établissement ou plat' className={classes.item}/>
            <Divider/>
            <FormControl className={classes.item}>
            <FormLabel>Type d'établissement</FormLabel>
            <FormGroup>
                {establishmentTypeControl}
            </FormGroup>
        </FormControl>
            <Divider/>
            <FormControl className={classes.item}>
                <FormLabel>Healthy ?</FormLabel>
                <FormGroup>
                    {healthyTypeControl}
                </FormGroup>
            </FormControl>
            <Divider/>
            <FormControl className={classes.item}>
                <FormLabel>Autres</FormLabel>
                <FormGroup>
                    {othersControl}
                </FormGroup>
            </FormControl>
            <Divider/>
        </Drawer>
    )
}

export default Search;