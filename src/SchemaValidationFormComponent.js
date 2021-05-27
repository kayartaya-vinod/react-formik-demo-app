import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function SchemaValidationFormComponent() {
    const f = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: yup.object({
            firstname: yup
                .string()
                .min(3, 'Minimum 3 letters required')
                .required('Firstname is required')
                .max(15, 'Maximum 15 letters allowed'),
            email: yup
                .string()
                .email('This needs to be in a valid email format')
                .required('Email id is required'),
        }),
    });

    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>React Formik Demo Application</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>Enter your details</h3>
                        <hr />
                        <form onSubmit={f.handleSubmit}>
                            <div className='form-group'>
                                <label
                                    htmlFor='firstname'
                                    className='form-label'
                                >
                                    Firstname
                                </label>
                                <div>
                                    <input
                                        className='form-control'
                                        type='text'
                                        id='firstname'
                                        {...f.getFieldProps('firstname')}
                                        autoFocus
                                    />
                                    {f.errors.firstname ? (
                                        <div className='text-danger'>
                                            {f.errors.firstname}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='form-group'>
                                <label
                                    htmlFor='lastname'
                                    className='form-label'
                                >
                                    Lastname
                                </label>
                                <div>
                                    <input
                                        className='form-control'
                                        type='text'
                                        id='lastname'
                                        {...f.getFieldProps('lastname')}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email' className='form-label'>
                                    Email address
                                </label>
                                <div>
                                    <input
                                        className='form-control'
                                        type='email'
                                        id='email'
                                        {...f.getFieldProps('email')}
                                    />
                                    {f.errors.email ? (
                                        <div className='text-danger'>
                                            {f.errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </>
    );
}
