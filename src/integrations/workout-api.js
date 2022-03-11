export const getAllPlans = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans`)
    console.log(response)
    if (response.status !== 200) {
      throw new Error('Unable to fetch plans')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch plans')
  }
}

export const getExercisesByPlanId = async (planId, isDataSaverMode) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/plans/${planId}/exercises?datasaver=${isDataSaverMode}`
    )
    if (response.status !== 200) {
      throw new Error('Unable to fetch exercises')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch exercises')
  }
}

export const getAllEquipments = async (planId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/plans/${planId}/equipments`
    )
    if (response.status !== 200) {
      throw new Error('Unable to fetch equipments')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch equipments')
  }
}

export const getBodyPartPercentages = async (planId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/plans/${planId}/body-parts`
    )
    if (response.status !== 200) {
      throw new Error('Unable to fetch body part percentages')
    }
    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch body part percentages')
  }
}
