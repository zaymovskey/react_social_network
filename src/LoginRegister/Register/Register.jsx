import {Field, Form} from "react-final-form";
import * as axios from "axios";
import styles from "../Login/Login.module.css";
import React from "react";

const RegisterForm = (props) => {
    return (
        <Form onSubmit={(formObj) => {
            axios.post('http://127.0.0.1:8000/auth/users/',
                {
                    username: formObj.login,
                    password: formObj.password
                }
            ).then(response => {
                },
                err => {
                    console.log(err)
                }
            )
        }}
              validate={values => {
                  const errors = {};
                  if (!values.login) {
                      errors.login = 'Это поле обязательно'
                  }
                  if (!values.password) {
                      errors.password = 'Это поле обязательно'
                  }
                  return errors
              }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Field name={'login'}>
                        {({ input, meta }) =>
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='Логин' className={styles.input} type='text' {...input}/>
                            </div>
                        }
                    </Field>
                    <Field name={'password'}>
                        {({ input, meta }) => (
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='Пароль...' className={styles.input} type='text' {...input}/>
                            </div>
                        )}
                    </Field>
                    <button className={styles.button} type='submit'>Зарегистророваться</button>
                </form>
            )}
        </Form>
    )
};

const Register = (props) => {
    return (
        <div className={styles.loginWrapper}>
            <section className={styles.section}>
                <div className='section-title'>Регистрация</div>
                <RegisterForm/>
            </section>
        </div>
    )
};

export default Register