import './AboutMe.css';
import Headline from '../Headline/Headline';
import Portfolio from '../Portfolio/Portfolio';
import myfoto from '../../images/myfoto-min.jpg'

function AboutMe() {
    return (
        <section className='about-me'>
            <Headline className={'headline headline_for-about-me'} heading={'Студент'}/>
            <div className='about-me__user'>
                <div className='about-me__container'>
                    <h3 className='about-me__title'>Михаил</h3>
                    <p className='about-me__subtitle'>
                        Фронтенд-разработчик,  {(new Date().getFullYear()-1974)} лет
                    </p>
                    <p className='about-me__info'>
                        Я родился в г.Омске, закончил исторический факультет. 
                        Работаю учителем в г. Нефтеюганск
                        Женат, есть трое сыновей. Я люблю играть на гитаре, 
                        а ещё увлекаюсь спортом. Недавно начал учиться вэб-разработке.
                        В поисках работы фронтендером получаю много отказов. Но я не сдаюсь - 
                        продолжаю учить Java Script!
                    </p>
                    <a className='about-me__link' href='https://github.com/MichaelAlikbarov' target='_blank' rel="noreferrer">
                        Github
                    </a>
                </div>
                <img className='about-me__foto' src={myfoto} alt='фото разработчика'></img>
            </div>
            <Portfolio/>
        </section>
    )
}

export default AboutMe;
