import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './HomePage';
import SelectSourcePage from './SelectSourcePage';
import SelectTablePage from './SelectTablePage';

const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/select-source-page' component={SelectSourcePage} />
        <Route path='/select-table/:sourceName' component={SelectTablePage} />
      </Switch>
    </Router>
  );

}

export default App;