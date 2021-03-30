const myMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  } else {
    // next is the next middleware (if there is one)
    // otherwise if there is no more middleware, next is dispatch to reducers
    return next(action); // everyone gets confused about the next.
  }
}

export default myMiddleware;
