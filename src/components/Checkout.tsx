// pages/checkout.tsx
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const products = [
    { id: 1, name: 'Product 1', price: 1000, quantity: 1 }, // Price in cents
    { id: 2, name: 'Product 2', price: 2000, quantity: 1 },
  ];

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const response = await axios.post('/api/checkout-sessions/create', { cartItems: products });
    const { sessionId } = response.data;

    await stripe!.redirectToCheckout({ sessionId });
    setLoading(false);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${(product.price / 100).toFixed(2)}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Processing...' : 'Proceed to Checkout'}
      </button>
    </div>
  );
};

export default Checkout;