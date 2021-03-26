import React from 'react';
import { Provider } from 'react-redux';
import App from "./app.jsx";

const Root = (props) => {

  return (
    <Provider store={props.store}>
      {<h1>I am the root</h1>}
      <App />
    </Provider>
  )
}

export default Root;