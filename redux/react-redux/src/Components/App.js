import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Routes/Home';
import TodoItemDetails from '../Routes/TodoItemDetails'


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={TodoItemDetails} />
    </Router>
  );  
}
export default App;
