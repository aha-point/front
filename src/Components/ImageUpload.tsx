import { ChangeEvent, FC, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
interface IFileUploadProps {
  imageFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: FC<IFileUploadProps> = ({ imageFileUpload }) => {
  const [file, setFile] = useState<string>('/logo192.png');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onClickUploadButton = (e: React.MouseEvent<HTMLElement>) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const onChangeFileUploadInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    // file state에 저장
    setFile(URL.createObjectURL(e.target.files[0]));

    // 이미지 클라우드에 올리기
    imageFileUpload(e);
  };
  return (
    <>
      <Input
        ref={fileInputRef}
        type="file"
        onChange={onChangeFileUploadInput}
        accept="image/*"
        name="chooseFile"
      />
      <Button onClick={onClickUploadButton}>이미지 업로드</Button>
      <Image src={file} alt="local file" loading="lazy" />
    </>
  );
};
const Image = styled('img')({
  width: '200px',
  height: '200px',
});
const Input = styled('input')({
  display: 'none',
});

export default FileUpload;
