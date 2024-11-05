// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const Success: React.FC = () => {
//   const router = useRouter();
//   const { session_id } = router.query;

//   const [sessionDetails, setSessionDetails] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSessionDetails = async () => {
//       if (!session_id) return;

//       try {
//         const response = await fetch(`/api/get-session?session_id=${session_id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch session details');
//         }
//         const session = await response.json();
//         setSessionDetails(session);
//       } catch (err) {
//         setError('Failed to fetch session details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessionDetails();
//   }, [session_id]);

//   const handleRedirect = () => {
//     router.push('/');
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="max-w-md mx-auto text-center p-6">
//       <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>
//       <p className="mb-2">Thank you for your purchase!</p>
//       {sessionDetails && (
//         <div className="bg-gray-100 p-4 rounded shadow-md">
//           <h2 className="text-lg font-semibold">Order Summary</h2>
//           <p><strong>Session ID:</strong> {sessionDetails.id}</p>
//           <p><strong>Total Amount:</strong> ${(sessionDetails.amount_total / 100).toFixed(2)}</p>
//           <p><strong>Payment Status:</strong> {sessionDetails.payment_status}</p>
//           <h3 className="mt-4">Items Purchased:</h3>
//           <ul>
//             {sessionDetails.line_items.data.map((item: any) => (
//               <li key={item.id}>
//                 {item.quantity} x {item.description} - ${(item.amount_total / 100).toFixed(2)}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button 
//         onClick={handleRedirect} 
//         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//       >
//         Go to Homepage
//       </button>
//     </div>
//   );
// };

// export default Success;