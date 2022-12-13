import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({drawerWidth = 240}) => {
  return (

    <Box 
        component='nav'
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 }}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs:'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
            
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div' >
                    Juan Orozco
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Inbox', 'Starred', 'Send email', 'Drafts'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container direction='column'>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'hola mundo '}/>
                                </Grid>
                            </ListItemButton>
                            
                        </ListItem>
                    ))
                }
            </List>



        </Drawer>



    </Box>



  )
}
