import "./RicycleBin.css"
import RicycleBinFooter from "./RicycleBinFooter";
import RicycleBinHeader from "./RicycleBinHeader";
import Product from "./Product";
import fruits from "../DATA";
import { useState } from "react";


function RicycleBin(){
const [ricycleBin,setRicycleBin]=useState(fruits)

//     const products= ricycleBin.map((product) =>{
// return <Product product={product}/>
//     })


    return <div className="Basket">
        <RicycleBinHeader />
        <Product />
         <RicycleBinFooter />
    </div>
}

export default RicycleBin;