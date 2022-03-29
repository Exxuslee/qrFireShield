import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';

import Home from './Pages/Home';

import {observer} from "mobx-react-lite";

const App = observer(() => {

  return (
      <Router>
          <Fragment>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
              </Routes>
          </Fragment>
      </Router>
  );
 })

export default App;





