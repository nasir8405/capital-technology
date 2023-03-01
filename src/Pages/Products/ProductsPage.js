import React from "react";
import { Products } from "../../Component/Products/Products";

const productData = [
  {
    id: "1",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F177%2Fj.png&w=384&q=100",
    title: "Tuma Kidsa bag",
    discription: "Fendi began life in 1925 as a fur and leath",
    price: "$40.00 - $50.00",
  },
  {
    id: "2",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&w=384&q=100",
    title: "Zara Army Bag",
    discription: "Structured buffed nappa leather top han",
    price: "$260.00 $300.00",
  },
  {
    id: "3",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F295%2F400.png&w=384&q=100",
    title: "Tay Ben Aviator",
    discription: "Polarized sunglasses reduce glare refl",
    price: "$1,350.00 $1,500.00",
  },
  {
    id: "4",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F296%2F2-0%25281%2529.png&w=384&q=100",
    title: "Tuma Style Cap",
    discription: "Structured buffed nappa leather top ",
    price: "$150.00 $170.00",
  },
  {
    id: "5",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F130%2FD---2.png&w=384&q=100",
    title: "Pior Womes Bangles",
    discription: "Structured buffed nappa leather top",
    price: "$1,150.00 $1,200.00",
  },
  {
    id: "6",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F125%2FE--1.png&w=384&q=100",
    title: "P & M Tokyo Talkies",
    discription: "Fendi began life in 1925 as a fur and leath",
    price: "$40.00 - $50.00",
  },
  {
    id: "7",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F120%2FA.png&w=384&q=100",
    title: "Darmani Woolen Comfort",
    discription: "Fendi began life in 1925 as a fur and leath",
    price: "$500.00 - $800.00",
  },
  {
    id: "8",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FB-3.png&w=384&q=100",
    title: "Tippot Classic",
    discription: "The new-model Submariner now feat",
    price: "$1,200.00 $1,250.00",
  },
  {
    id: "9",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F110%2FB.png&w=384&q=100",
    title: "Hopister Yellow",
    discription: "Fendi began life in 1925 as a fur and leath",
    price: "$80.00 - $100.00",
  },
  {
    id: "10",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F107%2FH-1.png&w=384&q=100",
    title: "Dido Pilot Glass",
    discription: "Polarized sunglasses reduce glare reflect",
    price: "$300.00 $350.00",
  },
];

const ProductsPage = () => {
  return (
    <div>
      <Products productData={productData} />
    </div>
  );
};

export default ProductsPage;
