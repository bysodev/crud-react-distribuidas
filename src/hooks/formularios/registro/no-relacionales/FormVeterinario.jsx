import React, { useContext } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';

import {UserContext} from '../../../../provider/UserContext'

export const FormVeterinario = () => {
    const {setveterinario} = useContext(UserContext)

  return (
    <div className='d-flex justify-content-center'>
    <div className="card w-75">
        <h5 className="card-header">Registrar un Veterinario</h5>
        <div className="card-body m-2">
            <Formik
            initialValues={{ name:'', email: '', telefono: '' }}
            validate={values => {
                const errors = {};
                if ( !values.name ){
                    errors.name = ` <h3>${Required}</h3>
                    `
                   
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if ( !values.telefono ){
                    errors.telefono = 'Required'
                }



                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setveterinario(values)
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
                    {errors.name && touched.name && errors.name}
                    <Input
                        type="name"
                        name="name"
                        className="mb-4"
                        placeholder="Nombre"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    
                    {errors.email && touched.email && errors.email}
                    <Input
                        type="email"
                        name="email"
                        className="mb-4"

                        // className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                 
                    {errors.telefono && touched.telefono && errors.telefono}
                    <Input
                        type="text"
                        name="telefono"
                        placeholder="Telefono"
                        className="mb-4"

                        // className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.telefono}
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
