// import React from 'react';
import ReactDOM from "react-dom";
import "./styles/index.css";
import { createStore } from "redux";
// import { Provider } from 'react-redux';
import reducer from "./reducers";
// import App from './components/App';
import getId from "./utils/getId";

const initialState = {
  books: [
    { id: getId(), title: "The Last Flight", category: "Action" },
    { id: getId(), title: "Chronicles of Narnia", category: "History" }
  ],
  filter: "All"
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
