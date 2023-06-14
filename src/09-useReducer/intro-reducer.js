const initialState = [
  {
    id: 1,
    todo: 'Watch Succession',
    done: false,
  },
]

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] Add Todo') {
    return [...state, action.payload]
  }
  return state
}

let todos = todoReducer()

console.log(todos)

const newTodo = {
  id: 2,
  todo: 'Watch Buffy',
  done: false,
}

const addTodoAction = {
  type: '[TODO] Add Todo',
  payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)
console.log(todos)
