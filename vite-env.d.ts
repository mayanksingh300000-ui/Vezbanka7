/// <reference types="vite/client" />

// We augment the NodeJS namespace to ensure process.env.API_KEY is recognized.
// We do not redeclare 'process' as a variable to avoid conflicts with @types/node
// and to ensure methods like process.cwd() remain available in vite.config.ts.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
