import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBodyPartPercentages } from '../integrations/workout-api'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import { GiMuscleUp } from 'react-icons/gi'

const BodyPartPercentage = () => {
    let { id } = useParams()
    const [bodyPartPercentages, setBodyPartPercentages] = useState(null)

    const getPercentages = async () => {
        const response = await getBodyPartPercentages(id)
        setBodyPartPercentages(response)
    }

    const [state, setState] = React.useState({
        right: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (!bodyPartPercentages) {
            getPercentages()
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
                {bodyPartPercentages &&
                    bodyPartPercentages.map((bodyPartPercentage, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <GiMuscleUp />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${bodyPartPercentage.body_part}: ${bodyPartPercentage.percentage}%`}
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
                    <Button onClick={toggleDrawer(anchor, true)} variant='contained' color='info'>Body part percentage</Button>
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

export default BodyPartPercentage
