function Block3 ({data}){
    let {icon, title, detail} = data;
    return (
        <div className="block3">
        <img src={Object.values(icon)[0]} alt="icon" />
        <h1>{title}</h1>
        <p>{detail}</p>
        </div>
    )
}

export default Block3;