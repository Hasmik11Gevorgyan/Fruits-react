import {Link} from "react-router-dom";
import fruits from "../DATA";


function Header(){
    // const [fruits,setFruits]=useState[fruits]
    // const [inputValue,setInputValue]=useState[0]
//     useEffect(()=>{
//         if(inputValue.length > 2){
//           setFruits(fruits.filter((val) => fruits.title.includes(inputValue))).map((val)=>{
//  return(<div> <h3>{val.title}</h3>
//               key={val.id} 
//              <img src= {val.image}/> 
             
//              </div> 
//              )
//           })
        
//         }
//       },[inputValue])

    return <div className="navbar">
        <div className="name"> FOODY</div>
        <Link to="/" className ="link">   Home</Link>
        <Link to="/Fruits" className="link">Fruits</Link>
        <Link to="/Vegetables" className="link">Vegetbles</Link>
        <Link to="/Fresh" className="link">Fresh</Link>
        <div class="search">
                <input  type="text" placeholder="search" 
                // onChange={(e)=> setInputValue(e.target.value)}
                // value = {inputValue}
        
         />
                <button className="button"> Buy</button>
            </div>
    </div>
    
}

export default Header;