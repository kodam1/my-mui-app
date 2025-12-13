// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ReactDOM from 'react-dom/client';
import theme from './theme.js';

import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveDrawer from './pages/ResponsiveDrawer.jsx';
import CheckboxesGroup from './pages/Checkboxes.jsx'
import BasicButtonGroup from './pages/BasicButtonGroup.jsx'
import FormPropsTextFields from './pages/FormPropsTextFields.jsx'
import ComboBox from './pages/ComboBox.jsx'
import ColumnGroupingTable from './pages/ColumnGroupingTable.jsx'
import MuIcon from './pages/MuIcon.jsx'
import DescriptionAlerts from './pages/DescriptionAlerts.jsx'



// import theme from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />    

    {/* <h1>This is Demo React JS with MUI :-)</h1> */}

  <br />

  {/* <h2>Vist path (home, about, responsivedrawer, checkboxes, basicbuttongroup, formpropstextfields, comboBox)</h2> */}


      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="responsivedrawer" element={<ResponsiveDrawer />} />
          <Route path="checkboxes" element={<CheckboxesGroup />} />
          <Route path="basicbuttongroup" element={<BasicButtonGroup />} />
          <Route path="formpropstextfields" element={<FormPropsTextFields />} />
          <Route path="comboBox" element={<ComboBox />} />
          <Route path="columnGroupingTable" element={<ColumnGroupingTable />} />
          <Route path="muIcon" element={<MuIcon />} />
          <Route path="descriptionAlerts" element={<DescriptionAlerts />} />

          
        </Routes>
      </BrowserRouter>
      {/* <App></App> */}
    </ThemeProvider> 
  </React.StrictMode>
);


