// Product Model (MongoDB/Mongoose Schema)
const productSchema = {
  _id: "string",
  name: "string",
  price: "number",
  src: "string",
  desc: "string",
  category: "string",
  stock: "number",
  rating: "number",
  createdAt: "date",
  updatedAt: "date",
};

module.exports = productSchema;
