import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';

import {UserContext} from '../../../../provider/UserContext'

export const FormVitalidad = () => {

    const { vitalidades, saveVitalidad, animales} = useContext(UserContext)
    
    // <td>{ retornaPotrero(dato.potreroId)  }</td>
    // 

  return (
        <>
            {/* <h1>{alert(JSON.stringify( veterinario ))}</h1> */}
            <div className='d-flex justify-content-center'>
    <div className="card w-75">
        <h5 className="card-header">Registrar Vitalidad</h5>
        <div className="card-body m-2">
            <Formik
            initialValues={{ 
                presion:'', 
                idAnimal: '', 
                pulso_cardiaco: '',
                tipo_sangre: "",
                // veterinaria: {
                    nombre_veterinaria: "",
                    email_veterinaria: "",
                    telefono_veterinaria: "",
                // },
                // vacunas: [
                    // {
                        nombre_vacuna: "",
                        fabricante_vacuna: "",
                        dosis_vacuna: "",
                    // }
                // ],
                // desparacitante: {
                    nombre_desparacitante: "",
                    fabricante: "",
                    dosis: ""
                // }
            }}
            validate={values => {

                const errors = {};
                const msg = 'Oh noes! Este campo no puede estar vacio';
                
                if (!values.idAnimal) {
                    errors.idAnimal = `${msg}`;
                } 
                if (!values.presion) {
                    errors.presion = `${msg}`;
                } 
                if ( !values.pulso_cardiaco ){
                    errors.pulso_cardiaco = `${msg}`
                }
                if ( !values.tipo_sangre ){
                    errors.tipo_sangre = `${msg}`
                }
          
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                
                setSubmitting(false);
                const obj = {
                    presion: values.presion, 
                    idAnimal: values.idAnimal, 
                    pulso_cardiaco: values.pulso_cardiaco,
                    tipo_sangre: values.tipo_sangre,
                    veterinaria: {
                        nombre_veterinaria: values.nombre_veterinaria,
                        email_veterinaria: values.email_veterinaria,
                        telefono_veterinaria: values.telefono_veterinaria,
                    },
                    vacunas: [
                        {
                            nombre_vacuna: values.nombre_vacuna,
                            fabricante: values.fabricante_vacuna,
                            dosis: values.dosis_vacuna,
                        }
                    ],
                    desparacitante: {
                        nombre_desparacitante: values.nombre_desparacitante,
                        fabricante: values.fabricante,
                        dosis: values.dosis
                    }
                }

                saveVitalidad(obj);
                window.location.reload();

            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (

                <form onSubmit={handleSubmit} className="">

                    <Field
                        as="select"
                        id="idAnimal"
                        name="idAnimal"
                        className="form-select mb-4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value=''>ANIMAL (ID)</option>
                        {animales.map((dato,index) => (
                            <option key={index} value={dato.id}>{dato.id}</option>
                        ))}
                        
                    </Field>
                    {errors.idAnimal && touched.idAnimal && <p  className="text-danger"> {errors.idAnimal}</p>}

                    <Input
                        type="text"
                        name="presion"
                        className="mb-4"
                        placeholder="Presion Arterial"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.presion}
                    />
                    {errors.presion && touched.presion && <p  className="text-danger"> {errors.presion}</p>}

                    <Input
                        type="text"
                        name="pulso_cardiaco"
                        className="mb-4"
                        placeholder="Pulso Arterial"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pulso_cardiaco}
                    />
                    {errors.pulso_cardiaco && touched.pulso_cardiaco && <p  className="text-danger"> {errors.pulso_cardiaco}</p>}

                    <Input
                        type="text"
                        name="tipo_sangre"
                        className="mb-4"
                        placeholder="Tipo de San"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tipo_sangre}
                    />
                    {errors.tipo_sangre && touched.tipo_sangre && <p  className="text-danger"> {errors.tipo_sangre}</p>}

                    <hr />
                    
                    <Input
                        type="text"
                        name="nombre_veterinaria"
                        className="mb-4"
                        placeholder="Nombre Veterinaria"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_veterinaria}
                    />

                    <Input
                        type="text"
                        name="email_veterinaria"
                        className="mb-4"
                        placeholder="Email Veterinaria"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email_veterinaria}
                    />

                    <Input
                        type="text"
                        name="telefono_veterinaria"
                        className="mb-4"
                        placeholder="Telefono Veterinaria"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.telefono_veterinaria}
                    />

                    <hr />

                    <Input
                        type="text"
                        name="nombre_vacuna"
                        className="mb-4"
                        placeholder="Nombre Vacuna"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_vacuna}
                    />

                    <Input
                        type="text"
                        name="fabricante_vacuna"
                        className="mb-4"
                        placeholder="Fabricante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fabricante_vacuna}
                    />

                    <Input
                        type="text"
                        name="dosis_vacuna"
                        className="mb-4"
                        placeholder="Dosis"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dosis_vacuna}
                    />

                    <hr />

                    <Input
                        type="text"
                        name="nombre_desparacitante"
                        className="mb-4"
                        placeholder="Nombre Desparacitante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_desparacitante}
                    />

                    <Input
                        type="text"
                        name="fabricante"
                        className="mb-4"
                        placeholder="Fabricante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fabricante}
                    />

                    <Input
                        type="text"
                        name="dosis"
                        className="mb-4"
                        placeholder="Dosis"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dosis}
                    />

                 <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-outline-success" disabled={isSubmitting} >
                        Submit
                    </button><button type="submit" className="btn btn-outline-primary" disabled={isSubmitting} >
                        Encadenar
                    </button>
                 </div>
                  
                </form>
            )}
            </Formik>
        </div>
    </div>
    </div>
        </>
    );
}
