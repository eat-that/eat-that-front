import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from '@material-ui/icons/Lock';
import NameIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from '@material-ui/icons/Email';
import {secondary} from "../../../shared/colors";
import frLocale from "date-fns/locale/fr";
import format from "date-fns/format";
import TodayIcon from '@material-ui/icons/Today';
import {
    DatePicker,
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Field} from "formik";
import PhoneIcon from '@material-ui/icons/Phone';

class FrLocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
        return format(date, "d MMM yyyy", { locale: frLocale });
    }
}

const useStyles = makeStyles((theme) => ({
    form:{
        display:'flex',
        flexDirection:'column',
        height:'100%'
    },
    formContent:{
        flex:'1 0 auto'
    },
    submit:{
        color:'white',
        flexShrink:0,
        width:'unset',
        margin:'5px'
    },
    icon:{
        color:secondary
    },
    input:{
        margin:'10px 5% 10px 5%',
        width:'90%'
    }
}));

const CreateUserAccountForm  = (props) => {

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

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    const classes = useStyles();

    return(
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formContent}>
            <TextField
                className={classes.input}
                name='firstName'
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                label='Prénom'
                value={firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <NameIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                className={classes.input}
                name='lastName'
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                label='Nom'
                value={lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <NameIcon />
                        </InputAdornment>
                    )
                }}
            />


            <TextField
                className={classes.input}
                name='email'
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                label='Email'
                value={email}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <EmailIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                className={classes.input}
                name='password'
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
                label='Mot de passe'
                value={password}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <LockIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                className={classes.input}
                name='confirmPassword'
                helperText={touched.confirmPassword ? errors.confirmPassword : ''}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                label='Confirmation mot de passe'
                value={confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <LockIcon />
                        </InputAdornment>
                    )
                }}
            />

            <MuiPickersUtilsProvider utils={FrLocalizedUtils} locale={frLocale}>
                <Field component={DatePicker}
                       name="birthDate"
                       label="Date de naissance"
                       format="d MMM yyyy"
                       value={birthDate}
                       className={classes.input}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start" className={classes.icon}>
                                   <TodayIcon />
                               </InputAdornment>
                           )
                       }}/>
            </MuiPickersUtilsProvider>

            <TextField
                className={classes.input}
                name='phone'
                helperText={touched.phone ? errors.phone : ''}
                error={touched.phone && Boolean(errors.phone)}
                label='N° de téléphone'
                value={phone}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.icon}>
                            <PhoneIcon />
                        </InputAdornment>
                    )
                }}
            />

            </div>
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