import React from 'react';
import styled from 'styled-components';
import { BasicInput } from './BasicInput';

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
      <BasicInput placeholder={placeholder} type={type} fieldName={fieldName}></BasicInput>
      <Button>{buttonText}</Button>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Button = styled.button`
  background-color: #f6bd60;
  border: none;
  padding: 6px;
  margin-left: 6px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #f7ede2;
  }
`;
export default InputButton;
