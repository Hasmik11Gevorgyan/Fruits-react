import "./ShopingCard.css";
import ShopingCardFooter from "./ShopingCardFooter";
import ShopingCardHeader from "./ShopingCradHeader";
import fruits from "../DATA";
import { useState } from "react";
import { useEffect } from "react";
import ShoppingCardComponent from "../Components/ShoppingCardComponent";
function ShopingCard({ shoppingData }) {
  const [shopingCard, setShopingCard] = useState(fruits);
    useEffect(()=>{
        console.log(shoppingData);
    })
  return (
    <div className="Basket">
      <ShopingCardHeader />
      {shoppingData.map(item=><ShoppingCardComponent title={item.title} imgSrc={item.img} />)}
      <ShopingCardFooter />
    </div>
  );
}

export default ShopingCard;