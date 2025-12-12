import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    
      <Typography variant="h4">Home Page</Typography>
      <Button component={Link} to="/about" variant="contained">
        Go to About
      </Button>
    </>
  );
}