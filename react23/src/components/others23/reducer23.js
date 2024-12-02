const initialState = { value: 0, city: 'Madrid', club: 'RMA' }

export default function counterReducer(state = initialState, action) {
    
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        return {
            ...state,
            value: state.value + 1                      // and update the copy with the new value
        }
    }
    return state                    // if reducer isnt configured for increment ==> return the existing state unchanged
}