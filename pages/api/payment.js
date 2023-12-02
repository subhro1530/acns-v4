// pages/api/payment.js
import { stripe } from "../../utils/stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    // You can customize the amount, currency, and other parameters based on your requirements
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "inr",
    });


    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: { message: "Internal Server Error" } });
  }
}
