
export default function(state={}, action) {
  switch(action.type) {
    case 'ADD_READING':
      return { ...state, readging: action.payload}

    default:
      return state
  }
}