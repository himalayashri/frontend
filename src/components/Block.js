function Block ({data}) {
    let {title, detail, icon} = data;
 
    return (
        <div className="block">
        <img src={Object.values(icon)[0]} alt="icon"/>
        <h1>{title}</h1>
        <p>{detail}</p>
        </div>
    )
}

export default Block;