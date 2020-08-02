var initState = {
    items: [],
    input: ''
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_ITEM') {
        return {
            ...state,
            items: [...state.items, action.item]
        };
    }
    if (action.type === 'DELETE_ITEM') {
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.id)
        }
    }
    if (action.type === 'MODIFY_ITEMS') {
        return {
            ...state,
            items: action.items
        }
    }
    if (action.type === 'INPUT_UPDATE') {
        return {
            ...state,
            input: action.text
        };
    }
    return state;
}
export default rootReducer;