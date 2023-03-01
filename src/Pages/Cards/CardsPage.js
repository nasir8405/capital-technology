import React from "react";
import { Cards } from "../../Component/Cards/Cards";
const cardsData = [
  {
    id: "1",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/271/logo16.png",
  },
  {
    id: "2",
    img1: "	https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F74%2Fray-ban.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/75/logo15.png",
  },
  {
    id: "3",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F72%2Fconverse.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/73/logo14.png",
  },
  {
    id: "4",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F70%2Femporio-armani.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/71/vintege.png",
  },
  {
    id: "5",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F68%2Funder-armour.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/69/logo12.png",
  },
  {
    id: "6",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F66%2Fgucci.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/67/logo11.png",
  },
  {
    id: "7",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F63%2Fzara.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/64/logo10.png",
  },
  {
    id: "8",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F61%2FHollister.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/62/logo4.png",
  },
  {
    id: "9",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F59%2Fherschel.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/60/logo8.png",
  },
  {
    id: "10",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F57%2Fnike.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/58/logo7.png",
  },
  {
    id: "11",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F55%2Ftissot.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/56/logo6.png",
  },
  {
    id: "12",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F53%2FCalvin-klein.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/54/logo5.png",
  },
  {
    id: "13",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F47%2Flevi-s.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/48/logo4.png",
  },
  {
    id: "14",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F45%2Fdior.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/46/logo3.png",
  },
  {
    id: "15",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F43%2Fpuma-logo.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/44/vintege.png",
  },
  {
    id: "16",
    img1: "https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F41%2Fadidas.png&w=640&q=75",
    img2: "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/42/fustion.png",
  },
];

export const CardsPage = () => {
  return (
    <div className="my-container">
      <Cards cardsData={cardsData} />
    </div>
  );
};
