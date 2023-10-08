import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList() {
    return(
        <section className='movies-card-list'>
            <ul className='movies-card__list'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
        </ul>
            <button type='button' className='movies-card__button'>
                <span className='movies-card__button-text'>Ещё</span>
            </button>
        </section>
    )
}