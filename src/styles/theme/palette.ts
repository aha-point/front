/* eslint-disable @typescript-eslint/no-empty-interface */
import { PaletteOptions } from '@mui/material/styles';

interface CustomColors {
  background?: {
    default?: string;
    main?: string;
    secondary?: string;
    info?: string;
    menu?: string;
    footer?: {
      default?: string;
      tab?: string;
    };
  };
  text?: {
    info?: string;
    description?: string;
  };
}

declare module '@mui/material/styles' {
  interface Palette {
    default?: Palette['primary'];
    header?: Palette['primary'];
    custom?: CustomColors;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    default?: PaletteOptions['primary'];
    header?: PaletteOptions['primary'];
    custom?: CustomColors;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

export const Colors = {
  BLUE1: '#313D52',
  BLUE2: '#475772',
  GRAY1: '#1C1C1C',
  GRAY2: '#3B3B3B',
  RED: '#E11212',
  YELLOW: '#e8d804',
  GREEN: '#c9d06a',
  BLUE: '#1D25E7',
  COOLGRAY: '#E9E8E6',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

export const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: Colors.COOLGRAY,
    paper: Colors.WHITE,
  },
  primary: {
    main: Colors.GREEN,
  },
  secondary: {
    /** NOT USED */
    main: Colors.BLUE1,
  },
  info: {
    main: Colors.BLUE2,
  },
  error: {
    main: Colors.RED,
  },
  success: {
    main: Colors.GREEN,
  },
  common: {
    black: Colors.BLACK,
    white: Colors.WHITE,
  },
  text: {
    primary: Colors.BLACK,
    secondary: Colors.GRAY1,
    disabled: Colors.GRAY2,
  },
  custom: {
    text: {
      info: Colors.BLUE1,
      description: Colors.BLUE2,
    },
  },
};
