const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false
}

const editRecipes = (state = initialState, action) => {
    if (action.type === 'EDIT_RECIPES_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === 'EDIT_RECIPES_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    } else if (action.type === 'EDIT_RECIPES_FAILED') {
        return {
            ...state,
            errorMessage: action.payload,
            isLoading: false
        }
    } else {
        return state
    }
}

export default editRecipes