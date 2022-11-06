
import { useState } from "react";
import SingleFruit from "../Components/Singlefruit";
import fruits from "../DATA";

function Fruits() {
  const [fruitsState, setFruitsState] = useState([...fruits]);
  const [inputValue, setInputValue] = useState("");
  
  
  const changeInput = (val) => {
    setInputValue(val)
  }
  const search = () => {
    setFruitsState(fruitsState.filter(val => val.title.toLowerCase().includes(inputValue)));
    setInputValue("");
  }
  return (
    <div>
      <div className="searchbtn">
        <input className="searchinput" value={inputValue} onChange={(e) => changeInput(e.target.value)} />
        <button className="searchbutton" onClick={search}>Search</button>
      </div>
      <div className="Fresh">
        {fruitsState
          .filter((fruit) => fruit.tip == "fruit")
          .map((fruit) => {
            return (
              <SingleFruit
                title={fruit.title}
                imgSrc={fruit.img}
                key={fruit.id}
                
              />
            );
          })}
      </div>
    </div>
  );
}

export default Fruits;
