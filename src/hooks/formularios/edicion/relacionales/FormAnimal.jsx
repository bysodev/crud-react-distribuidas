import React, { useContext, useEffect, useState } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {UserContext} from '../../../../provider/UserContext'

export const FormAnimalEdit = () => {

    const { animales, potreros, razas, editAnimal, deleteAnimal} = useContext(UserContext)
    const [animal, setanimal] = useState({id: '', edad: '', genero:'', razaId:'', potreroId: ''})
    const [msg, setmsg] = useState('')


    const seleccionarAnimal = (animal, causa) => {
        setanimal(animal)
        setanimal(animal)
        if(causa==='Editar'){
            setmodalEditar(true)
        }
        if(causa==='Eliminar'){
            setmodalEliminar(true)
        }
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setanimal((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        animal.id = parseInt( animal.id)
        animal.potreroId = parseInt( animal.potreroId)
        alert( JSON.stringify(animal))
        editAnimal(animal)
        // setmodalEditar(false)

    }

    const eliminar = async () => {
      setmodalEliminar(false)
      animal.id = parseInt( animal.id)
      deleteAnimal(animal)


      setmsg(
          {
              msg: `Se logro eliminar el animal con identificación ${animal.id} exitosamente.`,
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
                    <th>Edad</th>
                    <th>Genero</th>
                    <th>Raza</th>
                    <th>Potrero</th>
                    <th>Acciones</th>
                 
                </tr>
                </thead>
                <tbody>
                
                {animales.map((dato,index) =>  (
                    <tr key={index}>
                        {/* <td>{dato.id}</td> */}
                        <td>{dato.edad}</td>
                        <td>{dato.genero}</td>
                        <td>{dato.razaId}</td>
                        <td>{dato.potreroId}</td>
                        <td>
                            <input onClick={() =>  seleccionarAnimal(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary"/>
                            <input onClick={() =>  seleccionarAnimal(dato, 'Eliminar') } type="button" value="Eliminar" className="btn btn-outline-danger"/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Animal</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">

          <label>EDAD</label>
            <Input
                type="number"
                placeholder="Edad"
                name="edad"
                className="mb-3"
                onChange={handleChange}
                value={animal.edad}
            />

            <label>GENERO</label>
            <div role="group" aria-labelledby="my-radio-group" className="d-flex justify-content-evenly mb-4 mt-3">
              <label>
                <input type="radio" id="genero" name="genero" value="M" className="form-check-input me-2" defaultChecked /> 
                Macho 
              </label >
              <label>
                <input type="radio" id="genero" name="genero" value="F" className="form-check-input me-2" checked={ animal.genero == 'F' ? true : false } /> 
                Hembra
              </label>
            </div>
            <div className="d-flex justify-content-between ">
              <div className="w-50 me-sm-2">
                  <label>POTRERO</label>
                  <select
                      id="potreroId"
                      name="potreroId"
                      className="form-select  "
                      onChange={handleChange}
                      value={animal.potreroId} 
                  >
                      {/* <option value=''>POTRERO</option> */}
                      {potreros.map((dato,index) => (
                         parseInt(animal.potreroId) === parseFloat( dato.id ) ? <option key={index} value={dato.id} selected>{dato.nombre_potrero}</option> :  <option key={index} value={dato.id}>{dato.nombre_potrero}</option>
                      ))}
                  </select>
          
              </div>
              
              <div className="w-50">
                  <label>RAZA</label>
                  <select
                      id="razaId"
                      name="razaId"
                      className="form-select"
                      onChange={handleChange}
                      value={animal.razaId} 
                  >
                       {
                       razas.map((dato,index) => (
                         parseInt(animal.razaId) === parseFloat( dato.id ) ? <option key={index} value={dato.id} selected>{dato.nombre_raza}</option> :  <option key={index} value={dato.id}>{dato.nombre_raza}</option>
                      ))}
                  </select>
              </div>
            </div>
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
          Estás Seguro que deseas eliminar animal con identificador {animal && animal.id}
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
