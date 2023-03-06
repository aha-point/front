import React from 'react';
import styled from 'styled-components';
import { BasicInput } from './BasicInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fileURLToPath } from 'url';

interface InputFieldProps {
  fieldName: string;
  type: string;
  label: string;
  placeholder?: string;
  buttonText: string;
}

const InputButton = ({ placeholder, type, label, fieldName, buttonText }: InputFieldProps) => {
  return (
    <Box>
      <TextField required id="storeNumber" label={label} variant="standard" />
      <Button variant="contained">{buttonText}</Button>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export default InputButton;
