import Reack,{useState,useEffect} from "react";
// import { useTable } from "react-table";

function Tabla(){
    const[Tabla, setTabla]= useState([])

    useEffect(()=>{
        fetch("/apiTabla")
        .then(response=>response.json())
        .then(data =>{
            setTabla(data)
            
        })
    },[])

    useEffect(()=>{
        console.log("se actualizo el componente")
    },[Tabla])

    return(
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "0px",
          marginRight: "0px",
          color: "black"
        }}
      >
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Nacimiento</th>
                <th>Nombre Completo</th>
                <th>Edad</th>
                <th>Tipo de Pedido</th>
                <th>Numero de Pedido</th>
              </tr>
            </thead>
            <tbody>
              {Tabla.map((objeto, i) => {
                return (
                  <tr key={i}>
                    <td>{objeto.NOMBRE}</td>
                    <td>{objeto.APELLIDO}</td>
                    <td>{objeto.CEDULA}</td>
                    <td>{objeto.NACIMIENTO}</td>
                    <td>{objeto.NOMBRE} {objeto.APELLIDO}</td>
                    <td>{objeto.NACIMIENTO}</td>
                    <td>{objeto.tipo_de_pedido}</td>
                    <td>{objeto.numero_de_pedido}</td> 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default Tabla