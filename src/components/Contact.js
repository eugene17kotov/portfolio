import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://portfolio-api-h9rp.onrender.com';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({});

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const firstName = watch('firstName');
    const lastName = watch('lastName');
    const email = watch('email');
    const phone = watch('phone');
    const message = watch('message');

    const onSubmitForm = async formData => {
        setIsSubmitting(true);

        try {
            let response = await axios.post('/contact', formData);

            if (response.data.code === 200) {
                setStatus({ succes: true, message: 'Message sent successfully' });
                toast.success(status.message);
            } else {
                setStatus({
                    succes: false,
                    message: 'Something went wrong, please try again later.',
                });
                toast.error(status.message);
            }
        } catch (error) {
            console.error(error);
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
            toast.error(status.message);
        }

        setIsSubmitting(false);
        reset();
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={isVisible ? 'animate__animated animate__fadeIn' : ''}
                                >
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit(onSubmitForm)}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    value={firstName}
                                                    type="text"
                                                    placeholder="First Name"
                                                    aria-invalid={
                                                        errors.firstName ? 'true' : 'false'
                                                    }
                                                    {...register('firstName', {
                                                        required: 'Please, enter your name',
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                'First name must be at least 2 characters',
                                                        },
                                                        maxLength: {
                                                            value: 25,
                                                            message:
                                                                'First name must not exceed 25 characters',
                                                        },
                                                    })}
                                                />
                                                {errors.firstName && (
                                                    <p role="alert" className="error-message">
                                                        {errors.firstName?.message}
                                                    </p>
                                                )}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    value={lastName}
                                                    placeholder="Last Name"
                                                    aria-invalid={
                                                        errors.lastName ? 'true' : 'false'
                                                    }
                                                    {...register('lastName', {
                                                        required: 'Please, enter your surname',
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                'Last name must be at least 2 characters',
                                                        },
                                                        maxLength: {
                                                            value: 25,
                                                            message:
                                                                'Last name must not exceed 25 characters',
                                                        },
                                                    })}
                                                />
                                                {errors.lastName && (
                                                    <p role="alert" className="error-message">
                                                        {errors.lastName?.message}
                                                    </p>
                                                )}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    placeholder="Email Address"
                                                    aria-invalid={errors.email ? 'true' : 'false'}
                                                    {...register('email', {
                                                        required: 'Please, enter your email',
                                                        pattern: {
                                                            value: /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
                                                            message: 'Email format is incorrect',
                                                        },
                                                        maxLength: {
                                                            value: 100,
                                                            message:
                                                                'Email must not exceed 100 characters',
                                                        },
                                                    })}
                                                />
                                                {errors.email && (
                                                    <p role="alert" className="error-message">
                                                        {errors.email?.message}
                                                    </p>
                                                )}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    placeholder="Phone No."
                                                    aria-invalid={errors.phone ? 'true' : 'false'}
                                                    {...register('phone', {
                                                        required: 'Please, enter your phone',
                                                        pattern: {
                                                            value: /^(?:\+38)?\s?0\d{9}$/,
                                                            message: 'Phone format is incorrect',
                                                        },
                                                        minLength: {
                                                            value: 10,
                                                            message:
                                                                'Phone must be at least 10 characters',
                                                        },
                                                        maxLength: {
                                                            value: 13,
                                                            message:
                                                                'Phone must not exceed 13 characters',
                                                        },
                                                    })}
                                                />
                                                {errors.phone && (
                                                    <p role="alert" className="error-message">
                                                        {errors.phone?.message}
                                                    </p>
                                                )}
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    type="text"
                                                    value={message}
                                                    placeholder="Message"
                                                    aria-invalid={errors.message ? 'true' : 'false'}
                                                    {...register('message', {
                                                        maxLength: {
                                                            value: 1000,
                                                            message:
                                                                'The message must not exceed 1000 characters',
                                                        },
                                                    })}
                                                ></textarea>
                                                {errors.message && (
                                                    <p role="alert" className="error-message">
                                                        {errors.message?.message}
                                                    </p>
                                                )}
                                                <button
                                                    type="submit"
                                                    disabled={!isValid && !isSubmitting}
                                                >
                                                    <span>
                                                        {isSubmitting ? 'Sending...' : 'Send'}
                                                    </span>
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};
