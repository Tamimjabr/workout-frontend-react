export const getAllPlans = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans`)
    console.log(response)
    if (response.status !== 200) {
      throw new 'Unable to fetch plans'()
    }

    return await response.json()
  } catch (error) {
    throw new 'Unable to fetch plans'()
  }
}
