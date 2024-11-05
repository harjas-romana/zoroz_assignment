"use client";
import { useRouter } from 'next/router';

const Cancel: React.FC = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/checkout');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Canceled</h1>
      <p className="text-lg mb-2">Your payment was not completed.</p>
      <p className="text-gray-700 mb-4">Please try again or contact support if you continue to experience issues.</p>
      <button 
        onClick={handleRetry} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Retry Payment
      </button>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Need help? <a href="mailto:support@example.com" className="text-blue-500 underline">Contact Support</a></p>
      </div>
    </div>
  );
};

export default Cancel;