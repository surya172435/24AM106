// Backend Configuration
const config = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce",
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_key",
  environment: process.env.NODE_ENV || "development",
};

module.exports = config;
