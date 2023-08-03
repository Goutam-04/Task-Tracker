import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Navbaar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{backgroundColor:'#0A4D68'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Tracker
          </Typography>
          <Button variant="outlined" sx={{color:'white',outline:'white'}}>Github</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbaar