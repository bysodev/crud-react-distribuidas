import React from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';

export const FormPotreroEdit = () => {


  return (
    <div className='d-flex justify-content-center'>
    <div className="card w-75">
        <h5 className="card-header">Editar un potrero</h5>
        <div className="card-body m-2">
            <Formik
            initialValues={{ granja_id:'', hectareas: '', nombre_potrero: '',  tipo_suelo: '' }}
            validate={values => {
                const errors = {};
                if ( !values.tipo_suelo ){
                    errors.granja_id = ` <h3>${Required}</h3>`
                }
                if (!values.hectareas) {
                    errors.hectareas = 'Required';
                } 
                if ( !values.nombre_potrero ){
                    errors.nombre_potrero = 'Required'
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

                    <Input
                        type="number"
                        name="granja_id"
                        className="mb-4"
                        placeholder="Granja (ID)"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.granja_id}
                    />
                    
                    {errors.hectareas && touched.hectareas && errors.hectareas}
                    <Input
                        type="number"
                        name="hectareas"
                        className="mb-4"

                        // className="form-control"
                        placeholder="Hectarias"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hectareas}
                    />
                 
                    {errors.nombre_potrero && touched.nombre_potrero && errors.nombre_potrero}
                    <Input
                        type="text"
                        name="nombre_potrero"
                        placeholder="Nombre Potrero"
                        className="mb-4"
                        // className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_potrero}
                    />

                    {errors.tipo_suelo && touched.tipo_suelo && errors.tipo_suelo}
                    <Input
                        type="text"
                        name="tipo_suelo"
                        placeholder="Tipo Suelo"
                        className="mb-4"
                        // className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tipo_suelo}
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
