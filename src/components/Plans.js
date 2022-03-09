import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const plans = [
  { id: 1, name: 'Easy', duration_minutes: 15 },
  { id: 2, name: 'Medium', duration_minutes: 30 },
  { id: 3, name: 'Hard', duration_minutes: 60 },
  { id: 4, name: 'Cardio', duration_minutes: 90 },
  { id: 5, name: 'Abs workout', duration_minutes: 20 },
  { id: 6, name: 'Whole body workout', duration_minutes: 50 },
  { id: 7, name: 'Without Equipment', duration_minutes: 30 },
  { id: 8, name: 'Legs training', duration_minutes: 20 },
  { id: 9, name: 'Posture training', duration_minutes: 20 },
  { id: 10, name: 'Stretching exercises', duration_minutes: 40 }
]

const Plans = () => {
  return (
    <List
      sx={{
        m:'auto',
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        '& a': { textDecoration: 'none' }
      }}
    >
      {plans.map((plan) => (
        <>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar>
                <FitnessCenterIcon sx={{ color: 'black' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={plan.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    {plan.duration_minutes} minutes
                  </Typography>
                  {' (estimated time)'}
                </React.Fragment>
              }
            />
            <Link to={`/plans/${plan.id}`}>
              <Button type='button' variant='contained' color='info'>
                Details
              </Button>
            </Link>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  )
}

export default Plans
