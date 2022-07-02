import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import theme from './Theme'
import { MuiThemeProvider } from '@material-ui/core';

function App() {
  let [page, setPage] = useState('planets');

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
     <h1>Star Wars Fan Page</h1>
     <Navbar setPage={setPage}/>
      <div className="content"></div>
      { page === 'planets' ? <Planets/> : <People/>}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
