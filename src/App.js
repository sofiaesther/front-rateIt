import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {GlobalContext} from './contexts/GlobalContexts';

import {InitPage} from './pages/initPage';

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      <GlobalContext.Provider value= {{
        userInfo, setUserInfo
      }}>
        <Router>
          <Routes>
            <Route path="" element={<InitPage />} />
          </Routes>
        </Router>

      </GlobalContext.Provider>
    </>
  );
}

export default App;
