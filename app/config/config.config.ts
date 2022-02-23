export default {
  env: "development", // development, production
  database: {
    HOST: "localhost",
    PORT: 27017,
    DATABASE: "ugos_database",
    PASSWORD: "yourPassword",
    USER: "NodeJSServer",
    NAME: "appnameDB",
  },
  auth: {
    jwtSecret: "ugos-top-secret-key",
  },
};
