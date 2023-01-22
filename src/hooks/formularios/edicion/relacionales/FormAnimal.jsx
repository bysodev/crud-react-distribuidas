import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {UserContext} from '../../../../provider/UserContext'

export const FormAnimalEdit = () => {

    const { animales} = useContext(UserContext)
    const [animal, setanimal] = useState({id: '', edad: '', genero:'', razaId:'', potreroId: ''})

    const seleccionarAnimal = (animal, causa) => {
        console.log(animal)
        console.log(causa)
     
        console.log('HOLAAAAA')
        setanimal(animal)
        setmostrar(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setanimal((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        alert( JSON.stringify(animal ))

    }

    const [mostrar, setmostrar] = useState(false)

  return (
    <>
        <div className='d-flex justify-content-center'>
            <table className="table w-75">
                <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Genero</th>
                    <th>Raza</th>
                    <th>Potrero</th>
                    <th>Acciones</th>
                 
                </tr>
                </thead>
                <tbody>
                
                {animales.map((dato,index) =>  (
                    <tr key={index}>
                        <td>{dato.id}</td>
                        <td>{dato.genero}</td>
                        <td>{dato.razaId}</td>
                        <td>{dato.potreroId}</td>
                        <td>
                            <input onClick={() =>  seleccionarAnimal(dato, 'Editar') } type="button" value="Editar" className="btn btn-outline-primary"/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <Modal isOpen={mostrar}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={animal.id}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={ animal.genero}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={animal.razaId}
              onChange={handleChange}
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
            onClick={()=>setmostrar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

       
        
       
    </>
   
    );
}
