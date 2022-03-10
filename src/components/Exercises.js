import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Exercises = () => {
  let { id } = useParams()
  console.log(id)
  return <div>Exercises</div>
}

export default Exercises
