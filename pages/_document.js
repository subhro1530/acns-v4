// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
          />
          <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
          {/* Add the Stripe.js script */}
          {/* <script src="https://js.stripe.com/v3/"></script> */}
          {/* <script src="/stripe-init.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Initialize Stripe with your public key */}
          <script
            dangerouslySetInnerHTML={{
              __html: `var stripe = Stripe('pk_test_51OIoJjSAa9ETLewFo6OZP0TQ5kgvaJAWvxbZTFszyhc8dGkHV3wEmEpaReLul0Xycxxp9AbJ7Qh3oqu3T6o2Vznt00uIl69bRu');`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
