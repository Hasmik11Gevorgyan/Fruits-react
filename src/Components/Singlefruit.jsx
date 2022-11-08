function SingleFruit({title,imgSrc,addToCard}){
    
    return <div className="fruit">
        <span className="cardname">{title}</span>
        <button className="btnadd" >About</button>
        <img src={imgSrc} alt="image" style={{height:"200px",width:"180px"}}/>
        <button className="btnAdd" onClick={()=>{addToCard}}> Add to Card</button>
        <h4>Fresh Tomato
                $19.00 $29.00</h4>
    </div>
}

export default SingleFruit;