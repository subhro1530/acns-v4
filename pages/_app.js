// pages/_app.js
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OIoJjSAa9ETLewFo6OZP0TQ5kgvaJAWvxbZTFszyhc8dGkHV3wEmEpaReLul0Xycxxp9AbJ7Qh3oqu3T6o2Vznt00uIl69bRu"
);

function MyApp({ Component, pageProps }) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;
