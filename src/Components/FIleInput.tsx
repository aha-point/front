import React, { useRef } from 'react';
import styled from 'styled-components';

interface FileInputProps {}

const FileInput = ({}: FileInputProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const onClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string);
    //cloudinary 업로드

    return fetch(process.env.REACT_APP_CLOUDINARY_URL as string, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data.url);
  };
  const onChangeFileUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <div>
        <img
          src="/logo192.png"
          alt=""
          //   srcset="DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>"
        />
      </div>
      <Button onClick={onClickButton}>이미지 업로드</Button>
      <Input
        ref={fileInput}
        onChange={onChangeFileUploadInput}
        type="file"
        accept="image/*"
        name="chooseFile"
      />
    </div>
  );
};
const Input = styled.input`
  display: none;
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
export default FileInput;
