import React from 'react';
import './App.css';
import Add from './components/Add';
import Show from './components/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <Router>
       <div>
         <Switch>
           <Route exact path="/">
              <Add/>
           </Route>
           <Route exact path="/list">
              <Show/>
           </Route>
           <Route path="/update">
              <Update/>
           </Route>
           <Route path="/delete">
              <Delete/>
           </Route>
         </Switch> 
        
      </div>
    </Router>
   
  );
}

export default App;
