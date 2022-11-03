
import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";
// import { Link } from "react-router-dom";

function Product() {
  const [productState, setproductState] = useState([...fruits]);

  
  return (
    <div className="Products">
      {productState.map((fruits) => (
        <SingleFruit title={fruits.title} imgSrc={fruits.img} key={fruits.id}/>
      ))}
    </div>
  );
}

export default Product;