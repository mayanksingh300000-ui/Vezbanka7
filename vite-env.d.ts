// Manually declare process.env since vite/client types are unavailable
declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  };
};
