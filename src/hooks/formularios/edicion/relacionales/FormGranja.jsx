import React, { useContext, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Form } from 'react-router-dom';
import {UserContext} from '../../../../provider/UserContext'


export const FormGranjaEdit = () => {
    const {editGranja, findGranja, granjas, deleteGranja} = useContext(UserContext)

    const [granja, setgranja] = useState({})
    const [msg, setmsg] = useState('')

    const seleccionarGranja = (granja, causa) => {
        setgranja(granja)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setgranja((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        granja.id = parseInt( granja.id)
        // alert( JSON.stringify(granja))
        editGranja(granja)
        setmodalEditar(false)
    }

    const eliminar = async () => {
        setmodalEliminar(false)
        granja.id = parseInt( granja.id)
        let result = await findGranja(granja);
        // alert( JSON.stringify(granja))
        // deletegranja(granja)
        if( result ){
            deleteGranja(granja)
            setmsg(
                {
                    msg: `Se logro eliminar la granja ${granja.nombre_granja} exitosamente.`,
                    clase: 'text-success'
                })
            setmodalConfirmacion(true)
        }
        if( !result ){
            setmsg(
                {
                    msg: `No puede eliminar la granja ${granja.nombre_granja}, ya que cuenta con granjas.`,
                    clase: 'text-danger'
                })
            setmodalConfirmacion(true)
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
                <th>Tamaño</th>
                <th>Ubicación</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            
            {granjas.map((dato,index) =>  (
                <tr key={index}>
                    {/* <td>{dato.id}</td> */}
                    <td>{dato.nombre_granja}</td>
                    <td>{dato.tamanio_granja}</td>
                    <td>{dato.ubicacion}</td>
                    <td>
                        <input onClick={() =>  seleccionarGranja(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary"/>
                        <input onClick={() =>  seleccionarGranja(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    <Modal isOpen={modalEditar}>
    <ModalHeader>
      <div>
        <h3>Editar granja</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <div className="form-group">

      <label>NOMBRE</label>
        <Input
            type="text"
            name="nombre_granja"
            className="mb-3"
            onChange={handleChange}
            value={granja.nombre_granja}
        />

        <label>TAMAÑO - DESCRIPCCIÓN</label>
        <Input
            type="text"
            name="tamanio_granaj"
            className="mb-3"
            onChange={handleChange}
            value={granja.tamanio_granja}
        />
         <label>UBICACIÓN</label>
        <Input
            type="text"
            name="ubicacion"
            className="mb-3"
            onChange={handleChange}
            value={granja.ubicacion}
        />
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
          Estás Seguro que deseas eliminar la granja {granja && granja.nombre_granja}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
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
