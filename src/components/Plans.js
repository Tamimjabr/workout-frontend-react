import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

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
    <div>
      {plans.map((plan) => (
        <>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                {plan.name}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Duration: {plan.duration_minutes} min
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
          <Divider />
        </>
      ))}
    </div>
  )
}

export default Plans
