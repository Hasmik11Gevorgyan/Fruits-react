function SingleFruit({title,imgSrc,handleClick}){
    
    return <div className="fruit">
        <span className="cardname">{title}</span>
        <img src={imgSrc} alt="image" style={{height:"200px",width:"180px"}}/>
        <button className="btnAdd" onClick={()=>{handleClick}}> Add to Card</button>
        <h4>Fresh Tomato
                $19.00 $29.00</h4>
    </div>
}

export default SingleFruit;