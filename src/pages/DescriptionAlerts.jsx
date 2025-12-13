import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 

export default function DescriptionAlerts() {
  return (
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert with an informative title.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning Alert with a cautious title.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>
    </Stack> <br />
    
     <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This success Alert has a custom icon.
      </Alert>
      <Alert icon={false} severity="success">
        This success Alert has no icon.
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This success Alert uses `iconMapping` to override the default icon.
      </Alert>
    </Stack>
    </>
  );
}
