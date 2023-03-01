import React from "react";
import { NewArrival } from "../../Component/NewArrival/NewArrival";

const arrivalData = [
  {
    id: "1",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&w=384&q=100",
    title: "Zara Monte Carlo",
    discription: "Children’s clothing/ kids wear is usually more ",
    price: "$80.00 - $100.00",
  },
  {
    id: "2",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F234%2FChawkbazar1.png&w=384&q=100",
    title: "Zara Miss Chase",
    discription: "Fendi began life in 1925 as a fur and leather ",
    price: "$90.00$100.00",
  },
  {
    id: "3",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F232%2FCasual-Wear-1-1.jpg&w=384&q=100",
    title: "White Oxford Shirt",
    discription: "Children’s clothing/ kids wear is usually more ",
    price: "$10.00 - $40.00",
  },
  {
    id: "4",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F230%2FWatches-4-1.jpg&w=384&q=100",
    title: "The Horse Original",
    discription: "The Original watch featuring polished rose go",
    price: "$190.00 $200.00",
  },
  {
    id: "5",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F228%2FChawkbazar22.png&w=384&q=100",
    title: "Roadster Women Round Neck",
    discription: "Fendi began life in 1925 as a fur and leather ",
    price: "$150.00 - $200.00",
  },
  {
    id: "6",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F226%2FSunglasess-2-1.jpg&w=384&q=100",
    title: "Reyban Havana Phantos Sunglasses",
    discription: "Polarized sunglasses reduce glare reflected of",
    price: "$80.00 $100.00",
  },
  {
    id: "7",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F225%2FBackpack-7.jpg&w=384&q=100",
    title: "Philip Lim Leather Shoulder Bag",
    discription: "Structured buffed nappa leather top ha",
    price: "$250.00 $260.00",
  },
  {
    id: "8",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F223%2FCasual-Wear-4-1.jpg&w=384&q=100",
    title: "Nike Pro Mesh Top with Leggins",
    discription: "Casual wear (casual attire or clothing) may be a We",
    price: "$30.00 - $35.00",
  },
  {
    id: "9",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=384&q=100",
    title: "Nike Comfy Vapor Maxpro",
    discription: "Footwear refers to garments worn on the fe",
    price: "$220.00 - $250.00",
  },
  {
    id: "10",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F219%2FWatches-6-1.jpg&w=384&q=100",
    title: "Nike Car Wheel Watch",
    discription: "Children’s clothing/ kids wear is usually more ",
    price: "$230.00 $250.00",
  },
];
export const NewArrivalPage = () => {
  return (
    <div className="my-container">
      <NewArrival arrivalData={arrivalData} />
    </div>
  );
};
