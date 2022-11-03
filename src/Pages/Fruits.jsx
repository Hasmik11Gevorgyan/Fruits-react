

import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Fruits() {
  const [fruitsState, setFruitsState] = useState([...fruits]);

  
  return (
    <div className="Fruits">
      {fruitsState
      .filter((fruit) => ( fruit.tip== "fruit"))
      .map((fruit)=>{
        <SingleFruit title={fruit.title} imgSrc={fruit.img} key={fruit.id}/>
      })}
    </div>
  );
}

export default Fruits;