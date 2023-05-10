import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import BasicButton from './Button/BasicButton';
import { useEffect } from 'react';

interface InputFieldProps {
  fieldName: string;
  type: string;
  label: string;
  placeholder?: string;
  buttonText: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  validationCheck?: boolean;
}

const InputButton = ({
  placeholder,
  type,
  label,
  fieldName,
  buttonText,
  handleChange,
  validationCheck,
}: InputFieldProps) => {
  useEffect(() => {
    console.log(validationCheck, 'validationCheck');
  }, [validationCheck]);

  return (
    <>
      <Grid item xs={7}>
        <TextField
          fullWidth
          required
          id="storeNumber"
          label={label}
          variant="standard"
          onChange={(event): void => handleChange(event)}
          error={validationCheck}
        />
      </Grid>
      <Grid item xs={5} display="flex" justifyContent={'right'}>
        <BasicButton onClick={() => 'click'}>{buttonText}</BasicButton>
      </Grid>
    </>
  );
};

export default InputButton;
