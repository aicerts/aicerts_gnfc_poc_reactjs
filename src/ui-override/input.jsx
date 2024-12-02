import { TextField, InputAdornment } from '@mui/material';

const FormInput = ({ icon, ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        border:"",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'black',
        },
        '& .MuiInputLabel-root': {
          color: 'black',
        },
      }}
      InputProps={{
        endAdornment: icon ? <InputAdornment position="end" >{icon}</InputAdornment> : null,
      }}
    />
  );
};

export default FormInput;
