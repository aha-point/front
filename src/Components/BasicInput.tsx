import React from 'react';
import styled from 'styled-components';

interface BasicInfoTextFieldProps {
  fieldName: string;
  type: string;
  placeholder?: string;
}
export const BasicInput = ({ placeholder, type, fieldName }: BasicInfoTextFieldProps) => {
  return <Input placeholder={placeholder} type={type} name={fieldName} />;
};
const Input = styled.input`
  padding: 14px 20px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  background-color: #f3f3f3;
  border-radius: 6px;
`;
