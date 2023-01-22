import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import {UserContext} from '../../../../provider/UserContext'

export const FormAnimal = () => {
    const { saveAnimal, razas, potreros} = useContext(UserContext)
    // console.log(razas)

  return (
    <div className='d-flex justify-content-center'>
    
        <div className="card w-75">
            <h5 className="card-header">Registrar un animal</h5>
            <div className="card-body m-2">
                <Formik
                    initialValues={{ edad: '', genero: '',  potreroId: '',  razaId: '' }}
                    validate={values => {
                        const errors = {};
                 
                        if (!values.edad) {
                            errors.edad = 'Required';
                        } 
                        if ( !values.genero ){
                            errors.genero = 'Required'
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
                                type="number"
                                placeholder="Edad"
                                name="edad"
                                className="mb-4"
                                // className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.edad}
                            />
                     
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Genero</label> */}
                            <div role="group" aria-labelledby="my-radio-group" className="d-flex justify-content-evenly mb-3">
                                <label>
                                <Field type="radio" name="genero" value="M" className="form-check-input me-2" />
                                Masculino
                                </label >
                                <label>
                                <Field type="radio" name="genero" value="F" className="form-check-input me-2" />
                                Femenino
                                </label>
                            </div>
                           
                          
                           
                            
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Potrero</label> */}
                            <Field
                                as="select"
                                id="potreroId"
                                name="potreroId"
                                className="form-select w-50 mb-4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value=''>POTRERO</option>
                                {potreros.map((dato,index) => (
                                <option key={index} value={dato.id}>{dato.nombre_potrero}</option>
                                ))}
                            </Field>
                            {/* <Input
                                type="number"
                                placeholder="Potrero (ID)"
                                name="potreroId"
                                className="mb-4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.potrero_id}
                            /> */}
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Raza</label> */}
                            <Field
                                as="select"
                                id="razaId"
                                name="razaId"
                                className="form-select w-50 mb-3"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value=''>RAZA</option>
                                {razas.map((dato,index) => (
                                <option key={index} value={dato.id} >{dato.nombre_raza}</option>
                                ))}
                            </Field>
                            {/* <Input
                                type="number"
                                placeholder="RAZA (ID)"
                                name="razaId"
                                className="mb-4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.razaId}
                            /> */}
                    
                        
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
