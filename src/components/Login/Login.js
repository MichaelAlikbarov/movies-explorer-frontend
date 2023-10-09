// переиспользуем компонент Register
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';
import '../Register/Register.css';

export default function Login() {

    return (
        <section className='register'>
            <Logo/>
            <h1 className='register__title'>Рады видеть!</h1>
            <form className='register__form'>
                <label className='register__form-signature'>E-mail</label>
                <input className='register__form-item' type='email' required />
                <label className='register__form-signature'>Пароль</label>
                <input className='register__form-item register__form-item_password'
                    type='password' required minLength={4} maxLength={30}/>
                <button type='submit' className='register__button register__button_login'>
                    <span className='register__button-title'>Войти</span>
                </button>
            </form>
            <div className='register__signature'>
                <span className='register__signature-title'>Ещё не зарегистрированы?</span>
                <Link to='/signup' className='register__login-link'>Регистрация</Link>
            </div>
        </section>
    )
}
