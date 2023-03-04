import { useState } from "react"

const Counter=()=>{

    const [count,setCount]= useState(0);
    if (count>10){
        return alert("jumlah angka lebih dari 10")
    }
    return(
        <div className="kotak">
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>Tambah</button>
        </div>
    )

    }


    export default Counter;
