import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
      <AppBar
        position='static'
        sx={{ m: '0 0 2rem 0', '& a': { textDecoration: 'none', color:'white' } }}
        color='primary'
      >
        <Toolbar variant='dense'>
          <Link to='/'>
            <Typography variant='h6' color='inherit' component='div'>
              Workout App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
