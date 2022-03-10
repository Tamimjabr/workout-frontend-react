import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { getAllEquipments } from '../integrations/workout-api'

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
  }, [equipments])

  return (
    <>
      {equipments && (
        <List
          sx={{
            m: 'auto',
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            '& a': { textDecoration: 'none' }
          }}
        >
          {equipments.map((plan, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemText primary={equipments.equipment_type} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export default Equipments
