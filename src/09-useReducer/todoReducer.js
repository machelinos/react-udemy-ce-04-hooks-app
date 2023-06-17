export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...state, action.payload]
    case '[TODO] Delete Todo':
      return state.filter((item) => item.id !== action.payload)
    case '[TODO] Toggle Todo':
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done }
        } else {
          return item
        }
      })

    default:
      return state
  }
}
