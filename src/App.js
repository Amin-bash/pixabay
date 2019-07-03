import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/Navbar/Navbar';
import Search from './components/Search/Search'
import './App.css';
// 12932563-6235cbb87f1c27e3380cc90d3
function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
