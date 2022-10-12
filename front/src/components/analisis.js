import Reack,{useState,useEffect} from "react";
import {Bar} from "react-chartjs-2"


function Analisis(){
    const[Analisis, setAnalisis]= useState([])
    useEffect(()=>{
        fetch("/apiTabla")
        .then(response=>response.json())
        .then(data =>{
            setAnalisis(data)
            console.log(data)
        })
    },[])

    useEffect(()=>{
        console.log("se actualizo el componente")
    },[Analisis])

    const data={
        labels:Analisis.NOMBRE,
        datasets:[{
            label:"Nombres",
            backgroundColor: "rgba(0,255,0,1)",
            borderColor: "blak",
            borderWidth:1,
            hoverBackgroundColor: "rgba(0,255,0,0.2)",
            hoverBorderColor: "rgba(0,255,0,)",
            data: Analisis.CEDULA
    }]
    }
        const opciones={
            maintainAspectRatio:false
        }
    return (
        // <div>Analisis</div>
        <div className="Barra" style={{width: "250px", height: "300px"}}>
             <h1>Nombre vs Cedula</h1>
             {/* <Bar data={data} options={opciones}/> */}
         </div>
    )
}
export default Analisis