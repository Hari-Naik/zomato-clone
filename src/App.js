import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

import Context from './Context/Context';

import './App.css';
import Main from './pages/Main';
import GetTheApp from './pages/GetTheApp';


function App() {
  const [activeTabId, setactiveTabId] = React.useState("Delivery");

  const onSetActiveTabId = (name) => {
    setactiveTabId(name)

  }

  return (
    <Router>
      <div className='app'>
        <Context.Provider value={{ activeTabId, onSetActiveTabId: onSetActiveTabId }}>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Main />} />
            <Route exact path='/:id' element={<HomePage />} />
            <Route exact path = '/mobile' element={<GetTheApp/>} />
          </Routes>
        </Context.Provider>
      </div>
    </Router>
  );
}

export default App;
