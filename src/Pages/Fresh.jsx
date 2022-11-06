import { useEffect, useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Fresh(val) {
  const [Fresh, setFresh] = useState([...fruits]);
  const [inputValue,setInputValue] = useState("");

  const changeInput = (val)=>{
    setInputValue(val)
  }

  const search = ()=>{
    setFruitsState(fruitsState.filter(val => val.title.toLowerCase().includes(inputValue)));
    setInputValue("");
  }
  return (
    <div >
      <div className="searchbtn">
      <input className="searchinput" value={inputValue} onChange={(e)=>changeInput(e.target.value)}/>
    <button className="searchbutton" onClick={search}>Search</button>
    </div>
    <div className="Fresh">
      {Fresh.filter((val) => val.fresh == "true").map((val) => {
        return <SingleFruit title={val.title} imgSrc={val.img} key={val.id} />;
      })}
      </div>
    </div>
  );
}

export default Fresh;
