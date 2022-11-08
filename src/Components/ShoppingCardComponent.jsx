function ShoppingCardComponent({ title, imgSrc, deleteLi, handleDecrement, handleIncrement }) {
  function deleteLi(id) {
    ShoppingCardComponent.filter(ShoppingCard => ShoppingCard.id !== id)
  }
 
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1)
    };
    const handleDecrement = () => {
      setCount(count - 1)
    }


return (
  <div className="fruit">
    <button onClick={() => { deleteLi(id) }}>X</button>
    <button onClick={ handleIncrement ()}>Increment</button>
    <button onClick={handleDecrement()}>Decrement</button>
    <span className="cardname">{title}</span>
    <img
      src={imgSrc}
      alt="image"
      style={{ height: "200px", width: "180px" }}
    />
    <h4>Fresh Tomato $19.00 $29.00</h4>
  </div>
);}


export default ShoppingCardComponent;
