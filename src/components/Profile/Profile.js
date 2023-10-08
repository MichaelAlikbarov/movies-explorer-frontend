import './Profile.css';
import Header from '../Header/Header';
// import { useAuth } from '../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';

export default function Profile() { // const {signout, user } = useAuth();
    const user = 'AlMichael';
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <Header/>
            <main className='main'>
            <section className='profile'>
                <div className='profile__container'>
                    <h1 className='profile__title'>Привет, {user}!</h1>
                    <form className='profile__form'>
                        <div className='profile__item'>
                            <label className='profile__signature'>Имя</label>
                            <input className='profile__user-info' placeholder='Имя'
                                defaultValue={user}/>
                        </div>
                        <div className='profile__item'>
                            <label className='profile__signature'>E-mail</label>
                            <input className='profile__user-info' placeholder='E-mail'
                                defaultValue={'mail@mail.com'}
                                def/>
                        </div>
                        <p className='profile__subtitle'>Редактировать</p>
                        <button className='profile__button' type='button'
                            onClick={goBack}>Выйти из аккаунта</button>
                    </form>
                </div>
            </section>
            </main>
        </>
    )
}
