import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" align="center">Student Progression App</Typography>
        </Toolbar>
        <Auth />
      </AppBar>
    </div>
  );
}

export default App;
