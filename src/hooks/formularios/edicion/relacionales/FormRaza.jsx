import React, { useContext, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Form } from 'react-router-dom';
import { UserContext } from "../../../../provider/UserContext";

export const FormRazaEdit = () => {
    console.log('ME EJECUTE')
    const {deleteRaza, editRaza, razas, findRaza} = useContext(UserContext)

    const [raza, setRaza] = useState({})
    const [msg, setmsg] = useState('')

    const seleccionarRaza = (raza, causa) => {

        setRaza(raza)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setRaza((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        raza.id = parseInt( raza.id)
        // alert( JSON.stringify(raza))
        editRaza(raza)
        setmodalEditar(false)
    }

    const eliminar = async () => {
        setmodalEliminar(false)
        raza.id = parseInt( raza.id)
        let result = await findRaza(raza);
        // alert( JSON.stringify(raza))
        // deleteraza(raza)
        if( result ){
            deleteRaza(raza)
            setmsg(
                {
                    msg: `Se logro eliminar el raza ${raza.nombre_raza} exitosamente.`,
                    clase: 'text-success'
                })
            setmodalConfirmacion(true)
        }
        if( !result ){
            setmsg(
                {
                    msg: `No puede eliminar el raza ${raza.nombre_raza}, ya que cuenta con animales.`,
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
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            
            {razas.map((dato,index) =>  (
                <tr key={index}>
                    {/* <td>{dato.id}</td> */}
                    <td>{dato.nombre_raza}</td>
                   
                    <td>
                        <input onClick={() =>  seleccionarRaza(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary me-3"/>
                        <input onClick={() =>  seleccionarRaza(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    <Modal isOpen={modalEditar}>
    <ModalHeader>
      <div>
        <h3>Editar raza</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <div className="form-group">

      <label>NOMBRE</label>
        <Input
            type="text"
            name="nombre_raza"
            className="mb-3"
            onChange={handleChange}
            value={raza.nombre_raza}
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
          Estás Seguro que deseas eliminar raza {raza && raza.nombre_raza}
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
