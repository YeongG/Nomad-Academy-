import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Routes/Home';
import TodoItem from '../Routes/TodoItem';


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={TodoItem} />
    </Router>
  );  
}
export default App;
