import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { getAllEquipments } from '../integrations/workout-api'
import ListSubheader from '@mui/material/ListSubheader'

const Equipments = () => {
  let { id } = useParams()
  const [equipments, setEquipments] = useState(null)

  useEffect(() => {
    const getEquipments = async () => {
      const response = await getAllEquipments(id)
      console.log(response)
      setEquipments(response)
      console.log(equipments)
    }

    if (!equipments) {
      getEquipments()
    }
  }, [equipments, id, setEquipments])

  return (
    <>
      {equipments && (
        <List
          sx={{
            m: '1rem auto',
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            '& a': { textDecoration: 'none' }
          }}
          subheader={
            <ListSubheader component='div' id='Equipments'>
              Equipments:
            </ListSubheader>
          }
        >
          {equipments.map((equipment) => (
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemText primary={equipment.equipment_type} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export default Equipments
