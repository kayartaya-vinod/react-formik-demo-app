import React from 'react';
import { useFormik } from 'formik';

export default function BasicFormComponent() {
    const f = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log('values', values);
        },
        validate: (values) => {
            const err = {};
            if (!values.firstname) {
                err.firstname = 'Firstname is mandatory';
            } else if (values.firstname.length < 3) {
                err.firstname = 'At least 3 letters required for firstname';
            }

            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (values.email && re.test(values.email) === false) {
                err.email = 'Invalid email format';
            }

            return err;
        },
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
                                        onChange={f.handleChange}
                                        onBlur={f.handleBlur}
                                        value={f.values.firstname}
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
                                        onChange={f.handleChange}
                                        value={f.values.lastname}
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
                                        onChange={f.handleChange}
                                        onBlur={f.handleBlur}
                                        value={f.values.email}
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
