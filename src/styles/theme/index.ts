import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { palette } from './palette';
// import components from './components';
// import typography from './typography';

const Theme = () => {
  return responsiveFontSizes(
    createTheme({
      // components,
      // typography,
      palette,
    }),
  );
};

export default Theme;
