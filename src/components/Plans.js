import React from 'react'
import { useState, useEffect } from 'react'
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
import { getAllPlans } from '../integrations/workout-api'

const Plans = () => {
  const [plans, setPlans] = useState(null)

  useEffect(() => {
    const getPlans = async () => {
      const response = await getAllPlans()
      setPlans(response)
    }

    if (!plans) {
      getPlans()
    }
  }, [plans])

  return (
    <>
      {plans && (
        <List
          sx={{
            m: 'auto auto 2rem',
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            '& a': { textDecoration: 'none' }
          }}
        >
          {plans.map((plan, index) => (
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
                <Link to={`/plans/${plan.id}/exercises`}>
                  <Button type='button' variant='contained' color='info'>
                    Details
                  </Button>
                </Link>
              </ListItem>
              {plans.length - 1 !== index && <Divider />}
            </>
          ))}
        </List>
      )}
    </>
  )
}

export default Plans
