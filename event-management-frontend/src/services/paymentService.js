import api from "./api";

export const makePayment = (paymentData) =>
  api.post("/payments", paymentData);

export const paymentHistory = () =>
  api.get("/payments/history");
