import BestSellers from "../Bestselletrs";

const sampleProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: "https://picsum.photos/200/300?random=1",
        description: "High-quality sound with noise cancellation.",
        price: 89.99,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Smartwatch",
        image: "https://picsum.photos/200/300?random=2",
        description: "Stay connected with notifications on your wrist.",
        price: 199.99,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Portable Charger",
        image: "https://picsum.photos/200/300?random=3",
        description: "Fast charging for all your devices.",
        price: 29.99,
        rating: 4.3,
    },
 {
        id: 4,
        name: "Bluetooth Speaker",
        image: "https://picsum.photos/200/300?random=4",
        description: "Compact design with powerful sound.",
        price: 49.99,
        rating: 4.6,
    },
    {
        id: 5,
        name: "Fitness Tracker",
        image: "https://picsum.photos/200/300?random=5",
        description: "Track your workouts and health metrics.",
        price: 59.99,
        rating: 4.4,
    },
];

export default function App() {
    return <BestSellers initialProducts={sampleProducts} />;
}