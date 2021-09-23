import './App.css';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import ChallengeList from './components/challengeList/ChallengeList';
import ChallengeDetail from './components/challengeDetail/ChallengeDetail'
import Chat from './components/chat/Chat';
import Session from './components/session/Session';

function App() {
  return (
    <Switch>
        <Route path='/' exact>
          <Redirect to='/challengelist'/>
        </Route>

        <Route path='/challengelist' exact>
           <ChallengeList></ChallengeList>
        </Route>

        <Route path='/challengeDetail/:id' exact>
           <ChallengeDetail></ChallengeDetail>
        </Route>

        <Route path='/session/:id' exact>
           <Session></Session>
        </Route>

        <Route path='/chat/:id' exact>
           <Chat></Chat>
        </Route>
    </Switch>
  );
}

export default App;
