import {useState} from "react"
import fruits from "../DATA";
function ShoppingCardComponent({ title, imgSrc, id }) {
 
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1)
    };
    const handleDecrement = () => {
      setCount(count - 1)
    }


return (
  <div className="fruit">
   
    <button onClick={ handleIncrement }>Increment </button>
    <span>{count}</span>
    <button onClick={handleDecrement}>Decrement</button>
    <span className="cardname">{title}</span>
    <img
      imgsrc={fruits.img}
      alt="image"
      style={{ height: "200px", width: "180px" }}
    />
    id={id}
    <h4>Fresh Tomato $19.00 $29.00</h4>
  </div>
);}


export default ShoppingCardComponent;
