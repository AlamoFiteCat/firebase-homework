import React from 'react';
import HeaderComponent from './components/Header.component';
import ImageGridComponent from './components/ImageGrid.component';
import HomeComponent from './components/Home.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path={'/'} exact component={HomeComponent} />
          <Route path={'/awwbomb'} exact component={ImageGridComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
