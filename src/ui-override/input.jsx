import { TextField, InputAdornment } from '@mui/material';

const FormInput = ({ icon, ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        backgroundColor: 'none',
        borderRadius: '8px',
        border:"2px dashed white",
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
          color: 'white',
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
      }}
      InputProps={{
        endAdornment: icon ? <InputAdornment position="end" >{icon}</InputAdornment> : null,
      }}
    />
  );
};

export default FormInput;
