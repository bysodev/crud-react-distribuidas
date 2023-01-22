import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';
import { UserContext } from "../../../../provider/UserContext";
export const FormPotrero = () => {

    const {granjas, savePotrero}  = useContext(UserContext);
  return (
    <div className='d-flex justify-content-center'>
    <div className="card w-75">
        <h5 className="card-header">Registrar un potrero</h5>
        <div className="card-body m-2">
            <Formik
            initialValues={{ granjaId:'', hectareas: '', nombre_potrero: '',  tipo_suelo: '' }}
            validate={values => {
                const errors = {};
                if ( !values.tipo_suelo ){
                    errors.tipo_suelo = 'Required';
                }
                if (!values.hectareas) {
                    errors.hectareas = 'Required';
                } 
                if ( !values.nombre_potrero ){
                    errors.nombre_potrero = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log('SUBMIT')
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
                savePotrero(values)
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

                     <Field
                        as="select"
                        id="granjaId"
                        name="granjaId"
                        className="form-select w-50 mb-4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value=''>GRANJA (ID)</option>
                        {granjas.map((dato,index) => (
                            <option key={index} value={dato.id}>{dato.nombre_granja}</option>
                        ))}
                    </Field>
                    
                    {errors.hectareas && touched.hectareas && errors.hectareas}
                    <Input
                        type="text"
                        name="hectareas"
                        className="mb-4"
                        // className="form-control"
                        placeholder="Hectarias"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.hectareas}
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
