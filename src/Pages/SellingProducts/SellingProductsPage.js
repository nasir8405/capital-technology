import React from "react";
import { SellingProducts } from "../../Component/SellingProducts/SellingProducts";

const sellingProductData = [
  {
    id: "1",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F200%2FWatches-16.jpg&w=256&q=100",
    title: "Hermes Galaxy Watch 3",
    discription: "The Original watch featuring ",
    price: "$2,996.00 $3,200.00",
  },
  {
    id: "2",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2FGrid-14.png&w=256&q=100",
    title: "Hermes Carlton London",
    discription: "Off-White self-striped knitted ",
    price: "$300.00 - $650.00",
  },
  {
    id: "3",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F196%2Fkids-4.jpg&w=256&q=100",
    title: "H&M Boys Top",
    discription: "Children’s clothing/ kids wear i",
    price: "$350.00 - $1,000.00",
  },
  {
    id: "4",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fwomen10%25402x-1.jpg&w=256&q=100",
    title: "H & Dri-FIT Fleece",
    discription: "Casual wear (casual attire or ",
    price: "$550.00 $650.00",
  },
  {
    id: "5",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fwomen9-1.jpg&w=256&q=100",
    title: "Gucci Challenger",
    discription: "Casual wear (casual attire or ",
    price: "$899.00 - $1,000.00",
  },
  {
    id: "6",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2FBackpack-5.jpg&w=256&q=100",
    title: "Givenchy Shoulder Bag",
    discription: "Established in 1952, Givenchy’s stan",
    price: "$1,450.00 $1,500.00",
  },

  {
    id: "7",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F189%2FFootwear-4-1.jpg&w=256&q=100",
    title: "Converse Blazing Black",
    discription: "Footwear refers to garments worn",
    price: "$1,800.00 - $5,000.00",
  },
  {
    id: "8",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2FBackpack-1.jpg&w=256&q=100",
    title: "Chanel Shoulder Bag",
    discription: "100% Authenticity Guaranteed Ch",
    price: "$1,300.00 $1,500.00",
  },
  {
    id: "9",
    url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fkids-11.jpg&w=256&q=100",
    title: "Armani Checked Shirt",
    discription: "Children’s clothing/ kids wear is us",
    price: "$500.00 - $900.00",
  },
];
export const SellingProductsPage = () => {
  return (
    <div className="my-container">
      <SellingProducts sellingProductData={sellingProductData} />
    </div>
  );
};
