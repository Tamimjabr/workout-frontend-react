import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBodyPartPercentages } from '../integrations/workout-api'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const BodyPartPercentage = () => {
    let { id } = useParams()
    const [bodyPartPercentages, setBodyPartPercentages] = useState(null)

    useEffect(() => {
        const getPercentages = async () => {
            const response = await getBodyPartPercentages(id)
            setBodyPartPercentages(response)
        }

        if (!bodyPartPercentages) {
            getPercentages()
        }
    }, [bodyPartPercentages])

    return (
        <>
            {bodyPartPercentages && (
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="body part percentages">
                        <List>
                            {bodyPartPercentages.map((bodyPartPercentage) => (
                                <>
                                    <ListItem disablePadding>
                                        <ListItemText primary={bodyPartPercentage.body_part} />
                                        <ListItemText primary={bodyPartPercentage.percentage} />
                                    </ListItem>
                                </>
                            ))}
                        </List>
                    </nav>
                </Box>
            )}
            )
        </>
    )
}

export default BodyPartPercentage