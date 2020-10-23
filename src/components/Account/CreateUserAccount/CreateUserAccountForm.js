import React, {forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {primary} from "../../../shared/colors";

const useStyles = makeStyles((theme) => ({
    submit:{
        color:'white',
        position:'absolute',
        bottom:'0'
    }
}));

const CreateUserAccountForm  = (props) => {

    const firstRender = useRef(true);

    const {
        values: {firstName, lastName, email,password, confirmPassword, phone, birthDate},
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isValid,
        setFieldTouched,
        submit
    } = props;

    useLayoutEffect(() => {
        console.log('here',props,firstRender)
        if(!firstRender.current){
            handleSubmit()
        }
        firstRender.current = false;

    },[submit])

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    const classes = useStyles();

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                name='firstName'
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                label='Prénom'
                fullWidth
                value={firstName}
                onBlur={handleBlur}
                onChange={handleChange}
            />

            <TextField
                name='lastName'
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                label='Nom'
                fullWidth
                value={lastName}
                onBlur={handleBlur}
                onChange={handleChange}
            />


            <TextField
                name='email'
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                label='Email'
                fullWidth
                value={email}
                onBlur={handleBlur}
                onChange={handleChange}
            />

            <Button
            type='submit'
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!isValid}>
                Enregistrer
            </Button>
        </form>
    )
};
export default CreateUserAccountForm