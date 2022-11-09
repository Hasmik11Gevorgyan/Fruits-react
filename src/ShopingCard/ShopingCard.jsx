import "./ShopingCard.css";
import ShopingCardFooter from "./ShopingCardFooter";
import ShopingCardHeader from "./ShopingCradHeader";
import fruits from "../DATA";
import { useState, useEffect } from "react";

import ShoppingCardComponent from "../Components/ShoppingCardComponent";
function ShopingCard({ shoppingData, handleDecrement,handleIncrement,deleteLi }) {
  const [shopingCard, setShopingCard] = useState(fruits);
    useEffect(()=>{
        console.log(shoppingData);
    })
  return (
    <div className="Basket">
      <ShopingCardHeader />
      {shoppingData.map(item=><ShoppingCardComponent title={item.title} imgSrc={item.img}  handleDecrement={handleDecrement} handleIncrement={handleIncrement} deleteLi={deleteLi}/>)}
      <ShopingCardFooter />
    </div>
  );
}

export default ShopingCard;