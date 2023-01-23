import React, { useContext, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Form } from 'react-router-dom';
import { UserContext } from "../../../../provider/UserContext";

export const FormPotreroEdit = () => {

    const {editPotrero, deletePotrero, potreros, findPotrero} = useContext(UserContext)

    const [potrero, setpotrero] = useState({})
    const [msg, setmsg] = useState('')

    const seleccionarPotrero = (potrero, causa) => {
        setpotrero(potrero)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setpotrero((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        potrero.id = parseInt( potrero.id)
        // alert( JSON.stringify(potrero))
        editPotrero(potrero)
        setmodalEditar(false)
        window.location.reload();

    }
    const eliminar = async () => {
        setmodalEliminar(false)
        potrero.id = parseInt( potrero.id)
        let result = await findPotrero(potrero);
        // alert( JSON.stringify(potrero))
        // deletePotrero(potrero)
        if( result ){
            deletePotrero(potrero)
            setmsg(
                {
                    msg: `Se logro eliminar el potrero ${potrero.nombre_potrero} exitosamente.`,
                    clase: 'text-success'
                })
            setmodalConfirmacion(true)
        }
        if( !result ){
            setmsg(
                {
                    msg: `No puede eliminar el potrero ${potrero.nombre_potrero}, ya que cuenta con animales.`,
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
                <th>Hectarias</th>
                <th>Tipo de Suelo</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            
            {potreros.map((dato,index) =>  (
                <tr key={index}>
                    {/* <td>{dato.id}</td> */}
                    <td>{dato.nombre_potrero}</td>
                    <td>{dato.hectareas}</td>
                    <td>{dato.tipo_suelo}</td>
                    <td>
                        <input onClick={() =>  seleccionarPotrero(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary me-3"/>
                        <input onClick={() =>  seleccionarPotrero(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    <Modal isOpen={modalEditar}>
        <ModalHeader>
        <div>
            <h3>Editar potrero</h3>
        </div>
        </ModalHeader>
        <ModalBody>
        <div className="form-group">

        <label>NOMBRE</label>
            <Input
                type="text"
                name="nombre_potrero"
                className="mb-3"
                onChange={handleChange}
                value={potrero.nombre_potrero}
            />

            <label>HECTARIASs</label>
            <Input
                type="text"
                name="tamanio_granaj"
                className="mb-3"
                onChange={handleChange}
                value={potrero.hectareas}
            />
            <label>TIPO DE SUELO</label>
            <Input
                type="text"
                name="tipo_suelo"
                className="mb-3"
                onChange={handleChange}
                value={potrero.tipo_suelo}
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
          Estás Seguro que deseas eliminar potrero {potrero && potrero.nombre_potrero}
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
