import React, { useContext } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';
import {UserContext} from '../../../../provider/UserContext'

export const FormGranja = () => {

const {saveGranja} = useContext(UserContext)

  return (
    <div className='d-flex justify-content-center'>
        <div className="card w-75">
            <h5 className="card-header">Registrar una granja</h5>
            <div className="card-body m-2">
                <Formik
                initialValues={{ nombre_granja: '', tamanio_granja: '',  ubicacion: '' }}
                validate={values => {
                    const errors = {};
                    const msg = 'Oh noes! Este campo no puede estar vacio';

                    if ( !values.ubicacion ){
                        errors.ubicacion = `${msg}`;
                    }
                    if (!values.nombre_granja) {
                        errors.nombre_granja = `${msg}`;
                    } 
                    if ( !values.tamanio_granja ){
                        errors.tamanio_granja = `${msg}`;
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                    saveGranja(values)
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
                            name="nombre_granja"
                            className="mb-4"
                            // className="form-control"
                            placeholder="Nombre Granja"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre_granja}
                        />
                        {errors.nombre_granja && touched.nombre_granja && <p  className="text-danger"> { errors.nombre_granja} </p>}

                        <Input
                            type="text"
                            name="tamanio_granja"
                            placeholder="Describir el tamanio de la granja"
                            className="mb-4"
                            // className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tamanio_granja}
                        />
                        {errors.tamanio_granja && touched.tamanio_granja && <p  className="text-danger"> { errors.tamanio_granja} </p>}

                        <Input
                            type="text"
                            name="ubicacion"
                            placeholder="Ubicación"
                            className="mb-4"
                            // className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ubicacion}
                        />
                        {errors.ubicacion && touched.ubicacion && <p  className="text-danger"> { errors.ubicacion} </p>}
                    
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
