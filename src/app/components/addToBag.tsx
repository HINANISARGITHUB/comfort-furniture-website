"use client"

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";


export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string;
}

export default function AddToBag({
  currency,
  description,
 images,
  name,
  price,
}: ProductCart) {
  // shopping cart hook
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: images,
    id: "lsfhkn",
    // id: name.replace(/\s+/g, "-").toLowerCase(),
    
  };
  return (
  
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}