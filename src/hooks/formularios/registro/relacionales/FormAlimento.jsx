import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import {UserContext} from '../../../../provider/UserContext'

export const FormAlimento = () => {
    const { saveAnimal, razas, potreros} = useContext(UserContext)
    // console.log(razas)

  return (
    <div className='d-flex justify-content-center'>
    
        <div className="card w-75">
            <h5 className="card-header">Registrar un alimento</h5>
            <div className="card-body m-2">
                <Formik
                    initialValues={{ id_animales: '', cantidad_raciones: '',  nombre_alimentacion: '',  razaId: '' }}
                    validate={values => {
                        const errors = {};
                 
                        if (!values.edad) {
                            errors.edad = 'Required';
                        } 
                        if ( !values.cantidad_raciones ){
                            errors.cantidad_raciones = 'Required'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                        saveAnimal(values)
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
                            
                            <Input
                                type="text"
                                placeholder="Nombre del alimento"
                                name="nombre_alimentacion"
                                className="mb-4"
                                // className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nombre_alimentacion}
                            />
                     
                           
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Potrero</label> */}
                            <Field
                                as="select"
                                id="id_animales"
                                name="id_animales"
                                className="form-select w-50 mb-4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value=''>ANIMAL</option>
                                {animales.map((dato,index) => (
                                <option key={index} value={dato.id}>{dato.nombre_potrero}</option>
                                ))}
                            </Field>

                            <Input
                                type="text"
                                placeholder="Cantidad de raciones"
                                name="cantidad_raciones"
                                className="mb-4"
                                // className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cantidad_raciones}
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
    );
}
