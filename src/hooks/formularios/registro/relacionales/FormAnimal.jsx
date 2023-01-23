import React, { useContext } from "react";
import { Field, Formik } from "formik"; // Importamos el component <Formik />
import { Form } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
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
                        console.log('PASO POR AQUI');
                        const errors = {};
                        const msg = 'Oh noes! Este campo no puede estar vacio';
                 
                        if (!values.edad) {
                            errors.edad = `${msg}`;
                        } 
                        if ( !values.genero ){
                            errors.genero = `${msg}`
                        }
                        if ( !values.potreroId ){
                            errors.potreroId = `${msg}`
                        }
                        if ( !values.razaId ){
                            errors.razaId = `${msg}`
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                        saveAnimal(values)
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
                                type="number"
                                placeholder="Edad"
                                name="edad"
                                // className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.edad}
                            />
                            {/* <FormText className="text-danger"> */}
                                {errors.edad && touched.edad && <p  className="text-danger"> {errors.edad}</p>
                                }
                            {/* </FormText> */}

                     
                            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Genero</label> */}
                            <div role="group" aria-labelledby="my-radio-group" className="d-flex justify-content-evenly mb-3 mt-3">
                                <label>
                                <Field type="radio" id="genero" name="genero" value="M" className="form-check-input me-2" />
                                Masculino
                                </label >
                                <label>
                                <Field type="radio" id="genero" name="genero" value="F" className="form-check-input me-2" />
                                Femenino
                                </label>
                            </div>
           
                                {errors.genero && touched.genero && <p  className="text-danger"> {errors.genero}</p>}

                            <div className="d-flex justify-content-between mb-4">
                                <div className="w-50 me-sm-2">
                                    <Field
                                        as="select"
                                        id="potreroId"
                                        name="potreroId"
                                        className="form-select  "
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value=''>POTRERO</option>
                                        {potreros.map((dato,index) => (
                                        <option key={index} value={dato.id}>{dato.nombre_potrero}</option>
                                        ))}
                                    </Field>
                                    {errors.potreroId && touched.potreroId && <p  className="text-danger">{errors.potreroId}</p>}
                            
                                </div>
                               
                               <div className="w-50">
                                <Field
                                        as="select"
                                        id="razaId"
                                        name="razaId"
                                        className="form-select"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value=''>RAZA</option>
                                        {razas.map((dato,index) => (
                                        <option key={index} value={dato.id} >{dato.nombre_raza}</option>
                                        ))}
                                    </Field>
                                    {errors.razaId && touched.razaId && <p  className="text-danger"> {errors.razaId}</p>
                                    }
                               </div>
                               
                            </div>
                            
                            
            
                    
                        
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
