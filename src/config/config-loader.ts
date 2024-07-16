export const configLoader = () => {
  return {
    port: process.env.PORT,
    api_version: process.env.API_VERSION,
  };
};
