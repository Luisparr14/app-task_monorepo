import {Alert} from '@mui/material'
export default function AlertComponent({ error, errorMessage }) {
  return (
    <Alert
      sx={{
        position: 'absolute',
        bottom: '15px',
        left: '15px',
      }}
      variant='outlined'
      severity="error">
      {errorMessage}
    </Alert>
  )
}