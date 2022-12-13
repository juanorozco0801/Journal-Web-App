import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import  Google  from '@mui/icons-material/Google'
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (

    <AuthLayout title="Login">
    
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Email'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Password'
              type='password'
              placeholder='contraseña'
              fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Sign in
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google /> 
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='center'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Sign up
              </Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>


)
}
