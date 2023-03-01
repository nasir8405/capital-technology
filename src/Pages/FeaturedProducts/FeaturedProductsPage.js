import React from "react";
import { FeaturedProducts } from "../../Component/FeaturedProducts/FeaturedProducts";

export const FeaturedProductsPage = () => {
  const featuredProducts = [
    {
      id: "1",
      url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F323%2FFootwear.png&w=384&q=75",
      title: "Addidas FuelCell Propel V2 Runn",
      discription: "Fendi began life in 1925 as a fur and leath",
      price: "$40.00 - $50.00",
    },
    {
      id: "2",
      url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F294%2F30-%25281%2529.png&w=384&q=75",
      title: "Tuma Grey",
      discription: "Structured buffed nappa leather top han",
      price: "$260.00 $300.00",
    },
    {
      id: "3",
      url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F322%2Fwatch.png&w=384&q=75",
      title: "Pissot Super Dry",
      discription: "Polarized sunglasses reduce glare refl",
      price: "$1,350.00 $1,500.00",
    },
    {
      id: "4",
      url: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&w=384&q=75",
      title: "Zara Army Bag",
      discription: "Structured buffed nappa leather top ",
      price: "$150.00 $170.00",
    },
  ];
  return (
    <div>
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};
