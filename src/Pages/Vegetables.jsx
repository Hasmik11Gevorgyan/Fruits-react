import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Vegetables(val){
    const [VegetablesList, setVegetablesList] = useState([...fruits]);

      return (
        <div className="Vegetables">
          {VegetablesList
          .filter((val) =>  fruits.tip== "vegetables")
          .map((val)=>{
            <SingleFruit title={fruits.title} imgSrc={fruits.img} key={fruits.id}/>
          })}
        </div>
      );
    }
    
    export default Vegetables;
