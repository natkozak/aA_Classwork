export const fetchTodos = () => {
  return $.ajax({
   method: 'GET',
   url: '/api/todos'
 })
};

export const createTodo = (todo) => {
 return $.ajax({
   method: 'POST',
   url: '/api/todos',
   data: {
     todo: todo
   }
 })
}

export const deleteTodo = (todo) => {
 return $.ajax({
   method: 'DELETE',
   url: 'api/todo'
 })
}

export const updateTodo = (todo) => {
 return $.ajax({
   method: 'PATCH',
   url: '/api/todo',
   data: {
     todo: todo
   }
 })
}