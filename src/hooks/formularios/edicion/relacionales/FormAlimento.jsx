import React, { useContext, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Form } from 'react-router-dom';
import { UserContext } from "../../../../provider/UserContext";

export const FormAlimentoEdit = () => {

    const {editAlimento, deleteAlimento, alimentos, animales, findAlimentacion} = useContext(UserContext)

    const [alimento, setalimento] = useState({})
    const [msg, setmsg] = useState('')


    const seleccionaralimento = (alimento, causa) => {
        setalimento(alimento)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
        mostrar()
    }

    function mostrar(){
        console.log(alimento.id)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setalimento((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        alimento.id = parseInt( alimento.id)
        // alert( JSON.stringify(alimento))
        editAlimento(alimento)
        setmodalEditar(false)
        window.location.reload();

    }
    const eliminar = async () => {
        alimento.id = parseInt( alimento.id)
        findAlimentacion(alimento);
        // alert( JSON.stringify(alimento))
        // deleteAlimento(alimento)
        // setmodalEditar(false)

        setmodalEliminar(false)
        alimento.id = parseInt( alimento.id)
        let result = await findAlimentacion(alimento);
        // alert( JSON.stringify(alimento))
        // deletealimento(alimento)
        if( result ){
            deleteAlimento(alimento)
            setmsg(
                {
                    msg: `Se logro eliminar el alimento ${alimento.nombre_alimentacion} exitosamente.`,
                    clase: 'text-success'
                })
            setmodalConfirmacion(true)
        }
        if( !result ){
            setmsg(
                {
                    msg: `No puede eliminar el alimento ${alimento.nombre_alimentacion}, ya que cuenta con animales.`,
                    clase: 'text-danger'
                })
            
            setmodalConfirmacion(true)
        }
    }

    const retornaAnimal = (id) => {
        console.log(id)
        for( let animal of animales){
          // console.log(animal.id)
          if( parseInt( animal.id ) === parseInt( id ) ){
            console.log('LO ENCONTRO')
            return animal.nombre_potrero;
          }
        }
  
      }

    const pafinalizar = () => {
        setmodalConfirmacion(false)
        window.location.reload();
    }

    const [modalEditar, setmodalEditar] = useState(false)
    const [modalEliminar, setmodalEliminar] = useState(false)
    const [modalConfirmacion, setmodalConfirmacion] = useState(false)

  return (
    <>
    <div className='d-flex justify-content-center'>
        <table className="table w-75">
            <thead>
            <tr>
                {/* <th>Identificador</th> */}
                <th>Nombre</th>
                <th>Raciones</th>
                <th>Animal (ID)</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            
            {alimentos.map((dato,index) =>  (
                <tr key={index}>
                    {/* <td>{dato.id}</td> */}
                    <td>{dato.nombre_alimentacion}</td>
                    <td>{dato.cantidad_raciones}</td>
                    <td>{dato.animalesId}</td>
                    <td>
                        <input onClick={() =>  seleccionaralimento(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary me-3"/>
                        <input onClick={() =>  seleccionaralimento(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    <Modal isOpen={modalEditar}>
        <ModalHeader>
        <div>
            <h3>Editar alimento</h3>
        </div>
        </ModalHeader>
        <ModalBody>
        <div className="form-group">

        <label>NOMBRE</label>
            <Input
                type="text"
                name="nombre_alimentacion"
                className="mb-3"
                onChange={handleChange}
                value={alimento.nombre_alimentacion}
            />

            <label>RACIONES</label>
            <Input
                type="text"
                name="tamanio_granaj"
                className="mb-3"
                onChange={handleChange}
                value={alimento.cantidad_raciones}
            />
            {/* <label>ANIMAL</label>
            <select
                id="animalesId"
                name="animalesId"
                className="form-select"
                onChange={handleChange}
                value={alimento.animalesId} 
            >
                { !!(alimento.id) ? <option value={0}>Selecciona alguno</option> : ''}
                {
                    animales.map((dato,index) => (
                        parseInt(alimento.animalesId) === parseFloat( dato.id ) ? <option key={index} value={dato.id} selected>Identificador: {dato.id}</option> :  <option key={index} value={dato.id}>Identificador: {dato.id}</option>
                    ))
                }
            </select> */}
            <br />
        </div>
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
        </button>
        <button
            className="btn btn-danger"
            onClick={()=>setmodalEditar(false)}
        >
            Cancelar
        </button>
        </ModalFooter>
    </Modal>

    <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar alimento {alimento && alimento.nombre_alimentacion}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger " onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setmodalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
    </Modal>

    <Modal isOpen={modalConfirmacion}>
        <ModalBody className={`${msg.clase}`}>
          {msg.msg} 
        </ModalBody>
        <ModalFooter>

          <button
            className={`btn btn-outline-primary`}
            onClick={()=> pafinalizar()}
          >
            ENTENDIDO
          </button>
        </ModalFooter>
    </Modal>
    

   
    
   
</>
    );
}
