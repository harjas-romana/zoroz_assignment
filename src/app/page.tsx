import Image from "next/image";
import BestSellers from '@/components/Bestselletrs';
import Cancel from '@/components/Cancel';
import Checkout from '@/components/Checkout';
import FeaturedCategories from '@/components/FeaturedCategories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionalArea from '@/components/PromotionalArea';
import Testimonials from '@/components/Testimonials';
import MainComponent from "@/components/maincomponent";

const sampleCategories = [
    {
        id: 1,
        name: "Electronics",
        image: "https://picsum.photos/200/300?random=1",
        description: "Latest gadgets and devices.",
        productCount: 25,
        isNew: true,
    },
    {
        id: 2,
        name: "Fashion",
        image: "https://picsum.photos/200/300?random=2",
        description: "Trendy clothing and accessories.",
        productCount: 50,
    },
    {
        id: 3,
        name: "Home & Garden",
        image: "https://picsum.photos/200/300?random=3",
        description: "Everything for your home.",
        productCount: 30,
    },
    {
        id: 4,
        name: "Sports",
        image: "https://picsum.photos/200/300?random=4",
        description: "Gear for every sport.",
        productCount: 15,
        isNew: true,
    },
    {
        id: 5,
        name: "Books",
        image: "https://picsum.photos/200/300?random=5",
        description: "Explore new worlds through literature.",
        productCount: 40,
    },
    {
        id: 6,
        name: "Toys",
        image: "https://picsum.photos/200/300?random=6",
        description: "Fun and educational toys for kids.",
        productCount: 20,
    },
    {
        id: 7,
        name: "Beauty",
        image: "https://picsum.photos/200/300?random=7",
        description: "Skincare and makeup products.",
        productCount: 35,
    },
    {
        id: 8,
        name: "Automotive",
        image: "https://picsum.photos/200/300?random=8",
        description: "Car accessories and parts.",
        productCount: 10,
    },
];

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

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MainComponent />
      <FeaturedCategories categories ={sampleCategories} />
      <BestSellers initialProducts={sampleProducts} />
      <Testimonials />
    </div>
  );
}