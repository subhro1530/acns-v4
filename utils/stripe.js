// utils/stripe.js
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51OIoJjSAa9ETLewF3i0eXNRK3f4Am9ztHTRp4Euj7k1qAY95r83ZTjdvRxJWEkFbGZOwGkKq6ALdoZm4bcEkJaTQ00xZOsQfZb",
  {
    apiVersion: "2020-08-27", // Use the latest Stripe API version
  }
);

export { stripe };
