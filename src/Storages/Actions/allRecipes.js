import axios from "axios";

const allRecipes = (page, sort, search) => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_RECIPES_REQUEST' })
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}?page=${page}&sort=${sort}&search=${search}`)
        const menu = result.data.data
        dispatch({
            type: 'ALL_RECIPES_SUCCESS', payload: menu
        })
    } catch (error) {
        dispatch({
            type: 'ALL_RECIPES_FAILED',
            payload: error.message
        })
    }
}


export default allRecipes