// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Container, Typography, Button } from '@mui/material';
import ComboBox from './pages/ComboBox';
import BasicButtonGroup from './pages/BasicButtonGroup';
import CheckboxesGroup from './pages/Checkboxes'
import FormPropsTextFields from './pages/FormPropsTextFields'
// import ResponsiveDrawer from './pages/ResponsiveDrawer'

export default function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello React + MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>

    <ComboBox></ComboBox>
    <br />

    <BasicButtonGroup></BasicButtonGroup>
    <br />
    <CheckboxesGroup></CheckboxesGroup>
    <br />
    <FormPropsTextFields></FormPropsTextFields>
    <br />
    {/* <ResponsiveDrawer></ResponsiveDrawer> */}
    </Container>
  );
}

