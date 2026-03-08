const config = {
  app: {
    port: process.env.PORT || 5005,
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/contactbook", // default MongoDB URI for local development
  },
};

module.exports = config;
