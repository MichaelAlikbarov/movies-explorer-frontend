import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
    return (
        <section className='saved-movies'>
            <SearchForm/>
            <ul className='saved-movies__list'>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
        </section>
    )
}
