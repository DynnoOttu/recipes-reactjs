import axios from "axios";

const detailMenu = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        const menu = result.data.data
        dispatch({
            type: 'DETAIL_MENU_REQUEST',
            payload: menu
        })
        dispatch({
            type: 'DETAIL_MENU_SUCCESS',
            payload: menu
        })
    } catch (error) {
        dispatch({
            type: 'DETAIL_MENU_FAILED',
            payload: error.message
        })
    }
}


export default detailMenu
