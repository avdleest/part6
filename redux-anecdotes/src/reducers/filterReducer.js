const filterReducer = (state = '', action) => {
  console.log(state)
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.text
    default:
      return state
  }
}

export const changeFilter = (text) => {
  return { type: 'CHANGE_FILTER', text: text }
}

export default filterReducer