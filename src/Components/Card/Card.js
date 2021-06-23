import Style from'./Card.module.css'

const Card =(props)=>{
    const classes = ['fa fa-times-circle'];
    classes.push(Style.ficon);
     const classess = classes.join(' ');
    console.log(classess)
    
    return(
    <div className={Style.gridd}>
        <p>{props.text}</p>
        <span className={Style.sp}>{props.number}</span>
        <i className={classess} onClick={props.clicked}></i>
    </div>
    )
}
export default Card;
