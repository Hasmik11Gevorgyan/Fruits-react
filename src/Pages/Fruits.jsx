

import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Fruits() {
  const [fruitsState, setFruitsState] = useState([...fruits]);

  
  return (
    <div className="Fruits">
      {fruitsState.map((fruits) => (
        <SingleFruit title={fruits.title} imgSrc={fruits.img} key={fruits.id}/>
      ))}
    </div>
  );
}

export default Fruits;