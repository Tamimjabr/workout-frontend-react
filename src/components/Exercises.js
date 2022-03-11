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
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

const ExercisesContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin: auto auto 2rem;
`

const Exercises = () => {
  let { id } = useParams()
  const [exercises, setExercises] = useState(null)
  const [isDataSaverMode, setIsDataSaverMode] = useState(false)

  useEffect(() => {
    const getExercises = async () => {
      const response = await getExercisesByPlanId(id, false)
      setExercises(response)
    }

    if (!exercises) {
      getExercises()
    }
  }, [exercises, id])


  const handleDataSaverSwitch = async (event) => {
    const isChecked = event.target.checked
    console.log(isChecked)

    const response = await getExercisesByPlanId(id, isChecked)
    setExercises(response)
    setIsDataSaverMode(isChecked)
    console.log(isDataSaverMode)
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label='DataSaver'
          sx={{ m: 'auto 2rem auto auto' }}
          onChange={handleDataSaverSwitch}
        />
      </FormGroup>
      {<BodyPartPercentage />}
      {exercises && <Equipments />}
      {exercises && (
        <ExercisesContainer>
          {exercises.map((exercise) => (
            <Card key={exercises.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {!isDataSaverMode && (
                  <CardMedia
                    component='img'
                    height='350'
                    image={exercise.gif_url}
                    alt='Gif of the exercise'
                  />
                )}
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
