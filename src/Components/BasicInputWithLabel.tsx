import React from 'react';
import styled from 'styled-components';

interface BasicInfoTextFieldProps {
  fieldName: string;
  type: string;
  label: string;
  placeholder?: string;
}
const BasicInputWithLabel = ({ placeholder, type, fieldName, label }: BasicInfoTextFieldProps) => {
  return (
    <Box>
      <Label htmlFor={fieldName}>{label}</Label>
      <Input placeholder={placeholder} type={type} name={fieldName} />
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  margin-bottom: 6px;
`;
const Input = styled.input`
  padding: 6px 0;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #c1c1c1;
  outline: none;
  &::placeholder {
    color: #c1c1c1;
  }
`;
export default BasicInputWithLabel;
