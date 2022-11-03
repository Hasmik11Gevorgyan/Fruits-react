import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";


function Fresh(val){
     const [Fresh, setFresh] = useState([...fruits]);

    return (
      <div className="Fresh">
        {Fresh
        .filter((val) =>  val.fresh== "true")
        .map((val)=>{
          <SingleFruit title={val.title} imgSrc={val.img} key={val.id}/>
        })}
      </div>
    );
  }

export default Fresh;