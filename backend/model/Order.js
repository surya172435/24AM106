// Order Model (MongoDB/Mongoose Schema)
const orderSchema = {
  _id: "string",
  userId: "string",
  products: [
    {
      _id: "string",
      name: "string",
      price: "number",
      qty: "number",
    },
  ],
  totalPrice: "number",
  status: "enum (pending, shipped, delivered, cancelled)",
  address: "string",
  createdAt: "date",
  updatedAt: "date",
};

module.exports = orderSchema;
