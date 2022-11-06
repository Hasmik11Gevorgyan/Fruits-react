import "./RicycleBin.css"
import RicycleBinFooter from "./RicycleBinFooter";
import RicycleBinHeader from "./RicycleBinHeader";
import fruits from "../DATA";
import { useState } from "react";


function RicycleBin(){
const [ricycleBin,setRicycleBin]=useState(fruits)




    return <div className="Basket">
        <RicycleBinHeader />
        
         <RicycleBinFooter />
    </div>
}

export default RicycleBin;