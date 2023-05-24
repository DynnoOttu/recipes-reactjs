const initialState = {
    data: [],
    isLoading: true,
    Error: null
}

export const allRecipesReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_RECIPES_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'ALL_RECIPES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case 'ALL_RECIPES_FAILED':
            return {
                ...state,
                isLoading: false,
                Errror: action.payload
            }
        default:
            return state
    }
}

export default allRecipesReducers
