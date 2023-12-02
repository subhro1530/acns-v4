// Payment.js
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { Button, Box, Text, Input } from "@chakra-ui/react";

const stripePromise = loadStripe(
  "pk_test_51OIoJjSAa9ETLewFo6OZP0TQ5kgvaJAWvxbZTFszyhc8dGkHV3wEmEpaReLul0Xycxxp9AbJ7Qh3oqu3T6o2Vznt00uIl69bRu"
);

const PaymentForm = () => {
  const elements = useElements();
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const initStripe = async () => {
      const stripeInstance = await loadStripe(
        "pk_test_51OIoJjSAa9ETLewFo6OZP0TQ5kgvaJAWvxbZTFszyhc8dGkHV3wEmEpaReLul0Xycxxp9AbJ7Qh3oqu3T6o2Vznt00uIl69bRu"
      );
      setStripe(stripeInstance);
    };

    initStripe();
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1000, currency: "usd" }),
      });

      const { clientSecret } = await response.json();

      const { confirmCardPayment } = stripe;

      const cardElement = elements.getElement(CardElement);

      const result = await confirmCardPayment(clientSecret, {
        payment_method: {
          card: stripe.elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
        // Handle payment error
      } else if (result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded!");
        // Handle successful payment
      }
    } catch (error) {
      console.error(error.message);
      // Handle other errors
    }
  };

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#111119"
    >
      <Text fontSize="5xl" fontWeight="200" mb={10} mt={10} color="white">
        Help Us Grow!
      </Text>
      {stripe && (
        <Box width="100%" maxWidth="400px">
          <Input
            placeholder="Name"
            mt={5}
            mb={5}
            bgColor="#222229"
            color="white"
            border="1px solid white"
          />
          <Input
            placeholder="Email"
            mb={5}
            bgColor="#222229"
            color="white"
            border="1px solid white"
          />
          <Input
            placeholder="Phone"
            mb={10}
            bgColor="#222229"
            color="white"
            border="1px solid white"
          />
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  border: "1px solid white",
                  color: "#fff",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#fa755a",
                },
              },
            }}
          />
          <Button
            mt={10}
            mb={20}
            colorScheme="blue"
            size="lg"
            onClick={handlePayment}
            bgColor="transparent"
            border="1px solid white"
            _hover={{
              bgColor: "#111119",
              color: "black",
              bgColor: "white",
              border: "1px solid white",
            }}
          >
            Make Payment
          </Button>
        </Box>
      )}
    </Box>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
