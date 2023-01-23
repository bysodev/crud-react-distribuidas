import React, { useContext } from "react";
import { Formik } from "formik"; // Importamos el component <Formik />
import { Button, Card, CardBody, CardHeader, Container, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { Form } from 'react-router-dom';
import { UserContext } from "../../../../provider/UserContext";
export const FormRaza = () => {


    const {saveRaza} = useContext(UserContext);

  return (
    <div className='d-flex justify-content-center'>
    <div className="card w-75">
        <h5 className="card-header">Registrar una raza</h5>
        <div className="card-body m-2">
            <Formik
            initialValues={{ nombre_raza:''}}
            validate={values => {
                const errors = {};
                const msg = 'Oh noes! Este campo no puede estar vacio';

                if ( !values.nombre_raza ){
                    errors.nombre_raza = `${msg}`;
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
                saveRaza(values)
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
                        name="nombre_raza"
                        className="mb-4"
                        placeholder="Nombre de raza"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre_raza}
                    />
                    {errors.nombre_raza && touched.nombre_raza && <p  className="text-danger"> {errors.nombre_raza}</p>}
                    
                    
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
