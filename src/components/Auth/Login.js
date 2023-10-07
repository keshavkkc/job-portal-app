import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'
import * as Yup from 'yup';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { startLoginUsers } from '../../actions/userAction';
const Login = (props) => {

    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const redirect = () => {
            props.history.push('/jobsearch')
            props.handleAuth()
        }
        dispatch(startLoginUsers(values, resetForm, redirect))
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header as="h5">Login</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="mb-3 text-center">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={Formik.isSubmitting}
                                        >
                                            {Formik.isSubmitting ? 'Logging in...' : 'Login'}
                                        </Button>
                                    </div>
                                </Form>
                            </Formik>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                Don't have an account?{' '}
                                <Link to="/signup">Sign up here</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
