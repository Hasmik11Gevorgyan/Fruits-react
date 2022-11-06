import { useState } from "react"
function Footer(){
    const [inputValue,setInputValue] = useState("")
const changeInput=(val)=>{
    setInputValue(val)
}
    return <footer className="footer">
    <div>
        <h2>Foody</h2>
        <p className="text1">Diam do</p>
    </div>
    <div>
        <h2>Address</h2>
        <p className="text1">
            <i></i> 123 Street, New York, USA

            <i></i> +012 345 67890

            <i></i> info@example.com
        </p>
    </div>
    <div>
        <h2>Quick Links</h2>
        <p className="text1">
            <i></i> 123 Street, New York, USA

            <i></i> +012 345 67890

            <i></i> info@example.com
        </p>
    </div>
    <div>
        <h2>newsLetter</h2>
        <input className="input1"  value={inputValue} onChange={(e)=>{changeInput(e.target.setInputvalue)} }/>
        <button className="button"> Enter</button>

    </div>
    <span className="aboutus"> Created by SFS students</span>
</footer>
      
            
         
    
}

export default Footer;