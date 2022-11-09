
import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";


function Product({handleClick}) {
  const [productState, setproductState] = useState([...fruits]);

  
  return (
    <div className="products">
      {productState.map((fruits) => (
        <SingleFruit title={fruits.title} imgSrc={fruits.img} key={fruits.id} handleClick={handleClick}/>
      ))}
    </div>
  );
}

export default Product;