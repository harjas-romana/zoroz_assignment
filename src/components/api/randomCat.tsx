import FeaturedCategories from "../FeaturedCategories";

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
        image: "https://picsum.photos/200/300 ?random=6",
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

export default function App() {
    return <FeaturedCategories categories ={sampleCategories} />;
}