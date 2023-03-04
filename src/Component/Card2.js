import "./styles.css";
const Data = (props) => {
  return (
    <div>
    <p>Nama Lengkap : {props.name}</p>
    <p>Email : {props.email}</p>
    <p>Batch Pelatihan : {props.batch}</p>
    </div>
  )
  
};



const Card2 = ()=>{
    return(
        <div className="kotak">
            <h1>Data diri peserta kelas ReactJS</h1>
            <hr/>
            <Data name = " Shafa" email="shafathalitha@gmail.com" batch ="36"/>
        </div>
    )
}

export default Card2;