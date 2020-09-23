import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/HomePage';
import SelectSourcePage from './SelectSourcePage/SelectSourcePage';
import SelectTablePage from './SelectTablePage/SelectTablePage';
import IndentedTable from './SelectTablePage/IndentedTable';
const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/select-source-page' component={SelectSourcePage} />
        <Route path='/select-table/:sourceName' exact component={SelectTablePage} />
        <Route path='/select-table/:sourceName/:tableIndex' component={IndentedTable} />
      </Switch>
    </Router>
  );

}

export default App;