import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getExercisesByPlanId } from '../integrations/workout-api'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { styled } from '@mui/material/styles'
import Equipments from './Equipments'
import BodyPartPercentage from './BodyPartPercentage'

const ExercisesContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
`

const Exercises = () => {
  let { id } = useParams()
  const [exercises, setExercises] = useState(null)

  useEffect(() => {
    const getExercises = async () => {
      const response = await getExercisesByPlanId(id)
      setExercises(response)
    }

    if (!exercises) {
      getExercises()
    }
  }, [exercises, id])

  return (
    <>
      {<BodyPartPercentage />}
      {exercises && <Equipments />}
      {exercises && (
        <ExercisesContainer>
          {exercises.map((exercise) => (
            <Card key={exercises.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='350'
                  image={exercise.gif_url}
                  alt='Gif of the exercise'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {exercise.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Equipment: {exercise.equipment_type}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Body part: {exercise.body_part}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </ExercisesContainer>
      )}
    </>
  )
}

export default Exercises
