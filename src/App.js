import './App.css';
import { AllMeetups } from './Pages/AllMeetups';
import { NewMeetups } from './Pages/NewMeetups';
import { Favorites } from './Pages/Favorites';
import { Route,Switch } from 'react-router-dom';
import { MainNavigation } from './components/Layout/MainNavigation';
import { useState } from 'react';
import { Layout } from './components/Layout/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
      <switch>
      <Route path="/" exact>
        <AllMeetups />
      </Route>

      <Route path="/new-meetup">
        <NewMeetups />
      </Route>

      <Route path="/favorite">
        <Favorites />
      </Route>
      </switch>
      </Layout>

    </div>
  );
}

export default App;
