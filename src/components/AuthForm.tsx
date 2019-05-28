import {reduxForm, Field} from "redux-form";
import {Button, Form, Col, Row, FormControl} from "react-bootstrap";
import React from "react";

import Input from './Input';

export default reduxForm({
    form: 'authForm',
    enableReinitialize: true,
    validate: values => {
        const errors = {};

        return errors;
    },
    initialValues: {
        username: '',
        password: ''
    }
})((props: any) => {

    let {authorize, handleSubmit, labelPrefix} = props;
    return (
        <Form autoComplete="off" name="authForm" onSubmit={handleSubmit(authorize)}>
            <Field
                name="username"
                component={Input}
                placeholder="Enter username"
                labelPrefix={labelPrefix}
                disabled={false}
                label={ <strong className="required-asterisk"> Username </strong> }
            />
            <Field
                name="password"
                component={Input}
                type='password'
                placeholder="Enter password"
                labelPrefix={labelPrefix}
                disabled={false}
                label={ <strong className="required-asterisk"> Password </strong> }
            />
            <Button type='submit' className='submit-btn' variant="outline-info" block>Login</Button>
        </Form>
    )
});