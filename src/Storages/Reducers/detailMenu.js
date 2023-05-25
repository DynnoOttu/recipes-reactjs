const initialState = {
    data: [],
    isLoading: true,
    Error: null
}

export const detailMenu = (state = initialState, action) => {
    switch (action.type) {
        case 'DETAIL_MENU_REQUEST':
            return {
                ...state,
                data: action.payload,
                isLoading: true
            }
        case 'DETAIL_MENU_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case 'DETAIL_MENU_FAILURE':
            return {
                ...state,
                isLoading: false,
                Error: action.payload
            }
        default:
            return state
    }
}

export default detailMenu