import React, { useContext, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Form } from 'react-router-dom';

import {UserContext} from '../../../../provider/UserContext'

export const FormVitalidadEdit = () => {
    console.log('ME EJECUTE')
    const {deleteVitalidad, editVitalidad, vitalidades, animales } = useContext(UserContext)

    const [vitalidad, setvitalidad] = useState({})
    const [msg, setmsg] = useState('')

    const seleccionarvitalidad = (vitalidad, causa) => {

        setvitalidad(vitalidad)
        console.log(vitalidad)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setvitalidad((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        delete vitalidad.idAnimal;

        const obj = {
            presion: vitalidad.presion, 
            idAnimal: vitalidad.idAnimal, 
            pulso_cardiaco: vitalidad.pulso_cardiaco,
            tipo_sangre: vitalidad.tipo_sangre,
            veterinaria: {
                nombre_veterinaria: vitalidad.nombre_veterinaria,
                email_veterinaria: vitalidad.email_veterinaria,
                telefono_veterinaria: vitalidad.telefono_veterinaria,
            },
            vacunas: [
                {
                    nombre_vacuna: vitalidad.nombre_vacuna,
                    fabricante: vitalidad.fabricante_vacuna,
                    dosis: vitalidad.dosis_vacuna,
                }
            ],
            desparacitante: {
                nombre_desparacitante: vitalidad.nombre_desparacitante,
                fabricante: vitalidad.fabricante,
                dosis: vitalidad.dosis
            }
        }

        console.log(vitalidad)
        console.log(JSON.stringify(vitalidad))
        alert( JSON.stringify(vitalidad))
        editVitalidad(vitalidad)
        setmodalEditar(false)
    }

    const eliminar = async () => {
        setmodalEliminar(false)
        // alert( JSON.stringify(vitalidad))
        // deletevitalidad(vitalidad)
        deleteVitalidad(vitalidad)
        setmsg(
            {
                msg: `Se logro eliminar el registro de vitalidad con fecha de diagnostico ${vitalidad.fecha_diagnostico} exitosamente.`,
                clase: 'text-success'
            })
        setmodalConfirmacion(true)
       

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
                <th>Numero</th>
                <th>Animal (ID)</th>
                <th>Presion</th>
                <th>Pulso Cardico</th>
                <th>Tipo Sangre</th>
                <th>Fecha Diagnostico</th>
            </tr>
            </thead>
            <tbody>
            
            {vitalidades.map((dato,index) =>  (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dato.idAnimal}</td>
                    <td>{dato.presion}</td>
                    <td>{dato.pulso_cardiaco}</td>
                    <td>{dato.tipo_sangre}</td>
                    <td>{dato.fecha_diagnostico}</td>
                   
                    <td>
                        <input onClick={() =>  seleccionarvitalidad(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary me-3"/>
                        <input onClick={() =>  seleccionarvitalidad(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    <Modal isOpen={modalEditar}>
    <ModalHeader>
      <div>
        <h3>Editar vitalidad</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <div className="form-group">

      <label>PRESION</label>

          <Input
                        type="text"
                        name="presion"
                        className="mb-4"
                        placeholder="Presion Arterial"
                        onChange={handleChange}
                        value={vitalidad.presion}
                    />

        <label>PULSO CARDIACO</label>
                    <Input
                        type="text"
                        name="pulso_cardiaco"
                        className="mb-4"
                        placeholder="Pulso Arterial"
                        onChange={handleChange}
                        value={vitalidad.pulso_cardiaco}
                    />

                    <label>TIPO DE SANGRE</label>
                    <Input
                        type="text"
                        name="tipo_sangre"
                        className="mb-4"
                        placeholder="Tipo de Sangre"
                        onChange={handleChange}
                        value={vitalidad.tipo_sangre}
                    />

                    <hr />
                    <label>NOMBRE VETERINARIA</label>
                    
                    <Input
                        type="text"
                        name="nombre_veterinaria"
                        className="mb-4"
                        placeholder="Nombre Veterinaria"
                        onChange={handleChange}
                        value={vitalidad.veterinaria?.nombre_veterinaria}
                    />

                <label>EMAIL VETERINARIA</label>

                    <Input
                        type="text"
                        name="email_veterinaria"
                        className="mb-4"
                        placeholder="Email Veterinaria"
                        onChange={handleChange}
                        value={vitalidad.veterinaria?.email_veterinaria }
                    />

                <label>TELEFONO VETERINARIA</label>

                    <Input
                        type="text"
                        name="telefono_veterinaria"
                        className="mb-4"
                        placeholder="Telefono Veterinaria"
                        onChange={handleChange}
                        value={vitalidad.veterinaria?.telefono_veterinaria}
                    />

                    <hr />

                    <label>NOMBRE CACUNA</label>
                    <Input
                        type="text"
                        name="nombre_vacuna"
                        className="mb-4"
                        placeholder="Nombre Vacuna"
                        onChange={handleChange}
                        value={vitalidad.vacunas?.nombre_vacuna}
                    />

                    <label>FABRICANTE</label>

                    <Input
                        type="text"
                        name="fabricante"
                        className="mb-4"
                        placeholder="Fabricante"
                        onChange={handleChange}
                        value={vitalidad.vacunas?.fabricante}
                    />

                    <label>DOSIS VACUNA</label>
                    <Input
                        type="text"
                        name="dosis_vacuna"
                        className="mb-4"
                        placeholder="Dosis"
                        onChange={handleChange}
                        value={vitalidad.vacunas?.dosis_vacuna}
                    />

                    <hr />

                    <label>NOMBRE DESPARACITANTE</label>
                    <Input
                        type="text"
                        name="nombre_desparacitante"
                        className="mb-4"
                        placeholder="Nombre Desparacitante"
                        onChange={handleChange}
                        value={vitalidad.desparacitante?.nombre_desparacitante }
                    />

                    <label>FABRICANTE</label>
                    <Input
                        type="text"
                        name="fabricante"
                        className="mb-4"
                        placeholder="Fabricante"
                        onChange={handleChange}
                        value={vitalidad.desparacitante?.fabricante}
                     />

                    <label>DOSIS</label>
                    <Input
                        type="text"
                        name="dosis"
                        className="mb-4"
                        placeholder="Dosis"
                        onChange={handleChange}
                        value={vitalidad.desparacitante?.dosis}
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
          Estás Seguro que deseas eliminar vitalidad {vitalidad && vitalidad.nombre_vitalidad}
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
