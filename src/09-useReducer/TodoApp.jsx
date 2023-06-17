import { TodoList, TodoAdd } from './'
import { useTodos } from '../hooks'

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleAddNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos()

  return (
    <>
      <h1>
        Todos: {todosCount}, Pending: {todosPending}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onTodoDelete={handleDeleteTodo}
            onTodoToggle={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <TodoAdd onAddNewTodo={handleAddNewTodo} />
        </div>
      </div>
    </>
  )
}
