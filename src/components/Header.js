import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = (props) => {
  return (
    <>
      <AppBar position='static' sx={{ m: '0 0 2rem 0' }} color='primary'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit' component='div'>
            Workout App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
