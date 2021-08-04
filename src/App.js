import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
     
    <Switch>
        
        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route exact path='/starred'>
          <Starred />
        </Route>

        <Route exact path='/show/:id'>
          <Show />
        </Route>

        <Route >
          Error 404: Page not found
        </Route>

    </Switch>
    </div>
  );
}

export default App;
