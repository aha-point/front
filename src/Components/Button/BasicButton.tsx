import { Button, ButtonProps } from '@mui/material';
import { ReactNode, MouseEvent } from 'react';

interface IBasicButtonProps extends ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: ReactNode;
}

const BasicButton = ({ onClick, disabled = false, children, ...rest }: IBasicButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#bfc47e', // hover 시 secondary 색상으로 변경
          boxShadow: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BasicButton;
