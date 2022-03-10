export const getAllPlans = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans`)
    if (response.status !== 200) {
      throw new Error('Unable to fetch plans')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch plans')
  }
}

export const getExercisesByPlanId = async (planId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans/${planId}/exercises`)
    if (response.status !== 200) {
      throw new Error('Unable to fetch exercises')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch exercises')
  }
}

export const getBodyPartPercentages = async (planId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans/${planId}/body-parts`)
    if (response.status !== 200) {
      throw new Error('Unable to fetch body part percentages')
    }

    return await response.json()
  } catch (error) {
    throw new Error('Unable to fetch body part percentages')
  }
}
