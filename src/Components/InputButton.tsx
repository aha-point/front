import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface InputFieldProps {
  fieldName: string;
  type: string;
  label: string;
  placeholder?: string;
  buttonText: string;
}

const InputButton = ({ placeholder, type, label, fieldName, buttonText }: InputFieldProps) => {
  return (
    <>
      <Grid item xs={7}>
        <TextField fullWidth required id="storeNumber" label={label} variant="standard" />
      </Grid>
      <Grid item xs={5} display="flex" justifyContent={'right'}>
        <Button variant="contained">{buttonText}</Button>
      </Grid>
    </>
  );
};

export default InputButton;
