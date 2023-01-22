import React from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';

export const FormGranjaEdit = () => {

  return (
    <div className='d-flex justify-content-center'>
        <div className="card w-75">
            <h5 className="card-header">Editar una granja</h5>
            <div className="card-body m-2">
                <Formik
                initialValues={{ nombre_granja: '', tamanio_granja: '',  ubicacion: '' }}
                validate={values => {
                    const errors = {};
                    if ( !values.ubicacion ){
                        errors.ubicacion = ` <h3>${Required}</h3>`
                    }
                    if (!values.nombre_granja) {
                        errors.nombre_granja = 'Required';
                    } 
                    if ( !values.tamanio_granja ){
                        errors.tamanio_granja = 'Required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
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
                        
                        {errors.nombre_granja && touched.nombre_granja && errors.nombre_granja}
                        <Input
                            type="number"
                            name="nombre_granja"
                            className="mb-4"

                            // className="form-control"
                            placeholder="Nombre Granja"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre_granja}
                        />
                    
                        {errors.tamanio_granja && touched.tamanio_granja && errors.tamanio_granja}
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

                        {errors.ubicacion && touched.ubicacion && errors.ubicacion}
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
