import "./styles.css";
const Hallo = (props) => {
  return <h1>Hi saya,{props.name}!</h1>;
};



const Card = ()=>{
    return(
        <div className="kotak">
            <Hallo name = " Shafa"/>
            <hr/>
            <p>Saya dari batch 36 sudah install react</p>
        </div>
    )
}

export default Card;