import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';

import { createTheme, ThemeProvider } from '@mui/material'
import { cyan, teal } from '@mui/material/colors';

import { useState, useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: cyan
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  const [items, setItems] = useState()

    useEffect(() => {
        fetch('https://foooodify.herokuapp.com/api/foods')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home items={items}/>} />
            <Route exact path='/:id' element={<Details />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
