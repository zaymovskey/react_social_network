import styles from './Login.module.css'
import { Field, Form } from 'react-final-form'
import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";



const LoginForm = (props) => {
    return (
        <Form onSubmit={(formObj) => {
            props.login(formObj.username, formObj.password)
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
                    <Field name={'password'}>
                        {({ input, meta }) => (
                            <div>
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                <input placeholder='Пароль...' className={styles.input} type='text' {...input}/>
                            </div>
                        )}
                    </Field>
                    <button className={styles.button} type='submit'>Войти</button>
                </form>
            )}
        </Form>
    )
};

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'profile/'}/>
    }

    return (
        <div className={styles.loginWrapper}>
            <section className={styles.section}>
                <div className='section-title'>Вход</div>
                <LoginForm login={props.login}/>
                <div>Еще нет аккунта? <NavLink to={'/register'}>Зарегистрируйтесь!</NavLink></div>
            </section>
        </div>
    )
};

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(LoginContainer)