import {Field, Form} from "react-final-form";
import styles from "../Login/Login.module.css";
import React from "react";
import {register} from "../../../redux/authReducer";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

const RegisterForm = (props) => {
    return (
        <Form onSubmit={(formObj) => {
            props.register(formObj.username, formObj.password, formObj.phone, formObj.email)
        }}
              validate={values => {
                  const errors = {};
                  if (!values.username) {
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
                    <Field name={'username'}>
                        {({ input, meta }) =>
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='Логин' className={styles.input} type='text' {...input}/>
                            </div>
                        }
                    </Field>
                    <Field name={'email'}>
                        {({ input, meta }) =>
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='e-mail' className={styles.input} type='text' {...input}/>
                            </div>
                        }
                    </Field>
                    <Field name={'phone'}>
                        {({ input, meta }) =>
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='Телефон' className={styles.input} type='text' {...input}/>
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
    if (props.isAuth) {
        return <Redirect to={'profile/'}/>
    }
    return (
        <div className={styles.loginWrapper}>
            <section className={styles.section}>
                <div className='section-title'>Регистрация</div>
                <RegisterForm register={props.register}/>
            </section>
        </div>
    )
};

class RegisterContainer extends React.Component {
    render() {
        return <Register {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {register})(RegisterContainer)