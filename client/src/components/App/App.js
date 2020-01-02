import React from 'react';
import TopThreeCities from 'components/TopThreeCities/TopThreeCities';
import Cities from 'components/Cities/Cities';
import City from 'components/City/City'

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Job Finder</h1>
      <Switch>
        <Route path="/top" component={TopThreeCities} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/cities/:id" component={City} />
      </Switch>
    </div>
  )
}

export default App;
