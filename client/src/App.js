import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { AnimatePresence } from "framer-motion";
import { Earth } from './components/Earth/earth';
import Nav from './components/Nav/nav';
import Home from './components/Home/Home';
import ActivityFunction from './components/Activity/activity';
import Activities from './components/Activities/activities';
import CountryDetail from './components/CountryDetail';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AnimatePresence exitBeforeEnter>

          <Route path="/">
            <Nav />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/activity">
            <ActivityFunction/>
          </Route>
          <Route exact path="/activities">
            <Activities/>
          </Route>
          <Route exact path='/home/:id'>
            <CountryDetail/>
          </Route>
          <Route exact path='/earth'>
            <Earth/>
          </Route>

      </AnimatePresence>
    </div>
    </Provider>
  );
};

export default App;