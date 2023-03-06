import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

interface FileInputProps {
  children: string;
  onChangeFileUploadInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ onChangeFileUploadInput }: FileInputProps) => {
  const [file, setFile] = useState<File | null>();
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

  return (
    <div>
      <div>{file && <Image src={URL.createObjectURL(file)} alt="local file" />}</div>
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
const Image = styled.img`
  width: 300px;
  height: 300px;
`;
const Input = styled.input`
  display: none;
`;

export default FileInput;
