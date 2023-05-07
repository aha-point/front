import React from 'react';
import styled from 'styled-components';

interface BasicInputFieldProps {
  fieldName: string;
  type: string;
  placeholder?: string;
}
const BasicInput = ({ placeholder, type, fieldName }: BasicInputFieldProps) => {
  return <Input placeholder={placeholder} type={type} name={fieldName} />;
};
const Input = styled.input`
  padding: 6px 0;

  border: none;
  border-bottom: 1px solid #c1c1c1;
  outline: none;
  flex-grow: 1;
  &::placeholder {
    color: #c1c1c1;
  }
`;
export default BasicInput;
