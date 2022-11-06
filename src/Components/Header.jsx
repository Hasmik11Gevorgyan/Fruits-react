import { Link } from "react-router-dom";
import { useState } from "react";

const light = {
    backgroundColor : "white"
  }
  const dark = {
    backgroundColor : "#555464",
  }

function Header() {
    const [screenMode,setScreenMode] = useState(light);
    
      const darkMode = ()=>{
        setScreenMode(dark)
      }
      const lightMode = ()=>{
        setScreenMode(light)
      }
  return (
    <div className="navbar" style={screenMode}>
      <Link to="/" className="link">
      <div className="name"> FOODY</div>
      </Link>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/Fruits" className="link">
        Fruits
      </Link>
      <Link to="/Vegetables" className="link">
        Vegetbles
      </Link>
      <Link to="/Fresh" className="link">
        Fresh
      </Link>
      <div className="shop">
        <span className="my_shop">My Shopping</span>
        <div className="cart">
          
          <span>0</span>
      </div>
      </div>
      <div className="search">
        <button className="button" onClick={darkMode }> Dark/Light</button>
      </div>
    </div>
  );
}

export default Header;