import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>    
      <Typography variant="h4">About Page</Typography>
      <Button component={Link} to="/home" variant="outlined">
        Back Home
      </Button>
    </>
  );
}
