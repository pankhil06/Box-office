import React from 'react';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
        <Route exact path='/'>
          this is home page
        </Route>
        
        <Route exact path='/starred'>
          this is starred
        </Route>

        <Route >
          Error 404: Page not found
        </Route>

    </Switch>
  );
}

export default App;
