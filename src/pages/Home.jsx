import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    
      <Typography variant="h4">Home Page</Typography>
      <h1>This is Demo React JS with MUI :-)</h1>
      <Button component={Link} to="/about" variant="contained">
        Go to About
      </Button>&nbsp;
      {/* <Button component={Link} to="/home" variant="contained">
        Go to Home
      </Button>&nbsp; */}
      <Button component={Link} to="/responsivedrawer" variant="contained">
        Go to Responsivedrawer
      </Button>&nbsp;
      <Button component={Link} to="/checkboxes" variant="contained">
        Go to Checkboxes
      </Button>&nbsp;
      <Button component={Link} to="/basicbuttongroup" variant="contained">
        Go to Basicbuttongroup
      </Button>&nbsp;
      <Button component={Link} to="/formpropstextfields" variant="contained">
        Go to Formpropstextfields
      </Button>&nbsp;
      <Button component={Link} to="/comboBox" variant="contained">
        Go to ComboBox
      </Button>   &nbsp;
      <Button component={Link} to="/columnGroupingTable" variant="contained">
        Go to ColumnGroupingTable
      </Button>    &nbsp; <br />

      <Button component={Link} to="/muIcon" variant="contained">
        Go to MuIcon
      </Button>    &nbsp;  

      <Button component={Link} to="/descriptionAlerts" variant="contained">
        Go to DescriptionAlerts
      </Button>     


    </>
  );
}