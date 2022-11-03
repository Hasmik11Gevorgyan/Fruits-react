import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Vegetables(fruit){
    const [VegetablesList, setVegetablesList] = useState(fruits);
const vegetablesList = fruits.map((fruits) =>{ 
  return  `${fruits.tip} === "vegetables"` 
})

 
        
  
    return (
      <div className="fruits">
        {vegetablesList}
      </div>
    );
}

export default Vegetables;

// const products= ricycleBin.map((product) =>{
//   // return <Product product={product}/>
//   //     })