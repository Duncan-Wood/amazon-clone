const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NPCktAuPZYdbXedcLVseUraSvAQ3oB5PXBB2Ya32rHOsXg4wMYfdw96vi45MK6KN4iTTEfSAm5APyumvujBxVFS00L2JReHus"
);

// API
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
});

// Ok - Created
response.status(201).send({
  clientSecret: paymentIntent.client_secret,
});

// Listen command
exports.api = functions.https.onRequest(app);
