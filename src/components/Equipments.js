import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { getAllEquipments } from '../integrations/workout-api'
import ListItemIcon from '@mui/material/ListItemIcon'
import { IoBarbell } from 'react-icons/io5'

const Equipments = () => {
  let { id } = useParams()
  const [equipments, setEquipments] = useState(null)

  const getEquipments = async () => {
    const response = await getAllEquipments(id)
    setEquipments(response)
  }

  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (!equipments) {
      getEquipments()
    }

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {equipments &&
          equipments.map((equipment, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <IoBarbell />
              </ListItemIcon>
              <ListItemText
                primary={equipment.equipment_type}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  )

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant='contained' color='info' sx={{m: '1rem'}}>Equipments</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Equipments
