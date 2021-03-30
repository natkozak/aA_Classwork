  // use this to test in the browser console:
  
  // .then(
  //   todos => console.log(todos),
  //   error => console.log(error)
  // );

export const fetchTodos = () => {
  return $.ajax({
   method: 'GET',
   url: '/api/todos'
  })
};

export const createTodo = (todo) => {
  // debugger
  return $.ajax({
   method: 'POST',
   url: '/api/todos',
   data: {
     todo: todo
   }
 })
//  .then(
//    todos => console.log(todos),
//    error => console.log(error)
//  );
};

// $.ajax({
//   url: '/widgets/1.json',
//   type: 'GET',
//   success: function (widgetData) {
//     console.log('Here are the fetched json parameters of the widget:');
//     console.log(widgetData);
//   },
//   error: function (errMsg) {
//     console.log(errMsg);
//   }
// });

// $.ajax({
//   url: '/widgets.json',
//   type: 'POST',
//   data: {
//     widget: {
//       name: 'The Best Widget',
//       maker: 'The Widget King'
//     }
//   },
//   success: function (widgetData) {
//     console.log('Widget created!');
//     // `create` action should `render json: @widget`
//     // this gives the client access to the `id` attribute issued by
//     // the server.
//     console.log('issued id: ' + widgetData.id);
//   },
//   error: function (errMsg) {
//     console.log(errMsg);
//   }
// });

export const deleteTodo = (todo) => {
 return $.ajax({
   method: 'DELETE',
   url: 'api/todo'
 })
};

export const updateTodo = (todo) => {
 return $.ajax({
   method: 'PATCH',
   url: '/api/todo',
   data: {
     todo: todo
   }
 })
};