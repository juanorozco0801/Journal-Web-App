import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from "../../store/auth"

const formData = {
  displayName: '',
  email: '',
  password: '',

}

const formValidation = {
  displayName: [( value ) => value.length >= 1,'Name is mandatory'],
  email: [( value ) => value.includes('@'),'E-mail must have @'],
  password: [( value ) => value.length >= 6 ,'Password must be at least 6 characters'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth )

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

  const { formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid  } = useForm( formData, formValidation );


  const onSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return
    
    dispatch( startCreatingUserWithEmailPassword( formState ) );

  }


  return (

    <AuthLayout title="Register">
    
        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Full name'
              type='text'
              placeholder='Enter your full name'
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error = { !!displayNameValid && formSubmitted}
              helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Email'
              type='text'
              placeholder='email@google.com'
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error = { !!emailValid && formSubmitted}
              helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Password'
              type='password'
              placeholder='password'
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error = { !!passwordValid && formSubmitted}
              helperText= { passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>

              <Grid 
                item 
                xs={12}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>


              <Grid item xs={12}>
                <Button 
                  disabled={ isCheckingAuthentication }
                  variant="contained" 
                  fullWidth
                  type="submit">
                    Sign up
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='center'>
              <Typography sx={{ mr:1 }}>Already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Sign in
              </Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>


)
}
