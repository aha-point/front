import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import BasicButton from './Button/BasicButton';

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
        <BasicButton onClick={() => 'click'}>{buttonText}</BasicButton>
      </Grid>
    </>
  );
};

export default InputButton;
