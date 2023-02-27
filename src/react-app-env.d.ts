/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'local' | 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}
