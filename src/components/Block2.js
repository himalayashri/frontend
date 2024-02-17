function Block2 ({data}){
    let {icon, title, detail} = data;
    return(
        <div className="block2">
        <img src={Object.values(icon)[0]} alt="icon" />
        <div>
        <h1>{title}</h1>
        <p>{detail}</p>
        </div>
       
        </div>
    )
}

export default Block2;