import Logo from '../Logo/Logo';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return(
        <section className='register'>
            <Logo />
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <label className='register__form-signature'>Имя</label>
                <input className='register__form-item' placeholder='Имя' value={'AlMichael'} type='text' required />
                <label className='register__form-signature'>E-mail</label>
                <input className='register__form-item'  type='email' required />
                <label className='register__form-signature'>Пароль</label>
                <input className='register__form-item register__form-item_password' value={'*******'} type='password' required />
                <span className='register__error'>Что-то пошло не так...</span>
                <button type='submit' className='register__button'>
                    <span className='register__button-title'>Зарегистрироваться</span>
                </button>
            </form>
            <div className='register__signature'>
                <span className='register__signature-title'>Уже зарегистрированы?</span>
                <Link to='/signin' className='register__login-link'>Войти</Link>
            </div>

        </section>
    )
}