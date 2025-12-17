// User Model (MongoDB/Mongoose Schema)
const userSchema = {
  _id: "string",
  name: "string",
  email: "string",
  password: "string (hashed)",
  phone: "string",
  address: "string",
  role: "enum (user, admin)",
  createdAt: "date",
  updatedAt: "date",
};

module.exports = userSchema;
