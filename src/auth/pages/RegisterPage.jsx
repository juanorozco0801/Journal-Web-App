import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import  Google  from '@mui/icons-material/Google'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (

    <AuthLayout title="Register">
    
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Full name'
              type='text'
              placeholder='Juan Orozco'
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Email'
              type='text'
              placeholder='email@google.com'
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
              label='Password'
              type='password'
              placeholder='password'
              fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
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
