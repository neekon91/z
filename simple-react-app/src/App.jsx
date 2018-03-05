import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div className="nav-div">
        <NavLink exact to="/">Real Estate</NavLink>
        <NavLink to="/autos">Autos</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/allclassifieds">All Classifieds</NavLink>
        <div></div>
      </div>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
