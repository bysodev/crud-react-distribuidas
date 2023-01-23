import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import {UserContext} from '../../../../provider/UserContext'

export const FormAlimento = () => {
    const { saveAlimento, animales} = useContext(UserContext)
    // console.log(razas)

  return (
    <div className='d-flex justify-content-center'>
    
        <div className="card w-75">
            <h5 className="card-header">Registrar un alimento</h5>
            <div className="card-body m-2">
                <Formik
                    initialValues={{ animalesId: '', cantidad_raciones: '',  nombre_alimentacion: '' }}
                    validate={values => {
                        const errors = {};
                        const msg = 'Oh noes! Este campo no puede estar vacio';
                 
                        if (!values.animalesId) {
                            errors.animalesId = `${msg}`;
                        } 
                        if ( !values.cantidad_raciones ){
                            errors.cantidad_raciones = `${msg}`;
                        }
                        if ( !values.nombre_alimentacion ){
                            errors.nombre_alimentacion = `${msg}`;
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                        saveAlimento(values)
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
                            {errors.nombre_alimentacion && touched.nombre_alimentacion && <p  className="text-danger"> {errors.nombre_alimentacion}</p>}

                     
                           
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Potrero</label> */}
                            <Field
                                as="select"
                                id="animalesId"
                                name="animalesId"
                                className="form-select mb-4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value=''>ANIMAL</option>
                                {animales.map((dato,index) => (
                                <option key={index} value={dato.id}>{dato.edad}</option>
                                ))}
                            </Field>
                            {errors.animalesId && touched.animalesId && <p  className="text-danger"> {errors.animalesId}</p>}


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
                            {errors.cantidad_raciones && touched.cantidad_raciones && <p  className="text-danger"> {errors.cantidad_raciones}</p>}

                           
                        
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
