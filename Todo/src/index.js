import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import Todo from './Todo';
import "./styles.css";

function App() {

  return (
    <Fragment>    
      <Todo />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
