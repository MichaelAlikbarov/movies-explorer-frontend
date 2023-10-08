import './SearchForm.css';
import tumbler from '../../images/smalltumb.svg';
import tumbleroff from '../../images/smalltumboff.svg';
import findIcon from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useState} from 'react';

function SearchForm() {
    const [showTumbler, setShowTumbler] = useState(tumbler);

    function handleToggle() {
        if (showTumbler === tumbler) {
            setShowTumbler(tumbleroff)
        } else 
            setShowTumbler(tumbler)
    }

    function handlePreloader(e) {
        e.preventDefault()
    }

    return (
        <section className='search-form'>
            <form className='search-form__form'>
                <div className='search-form__find-container'>
                    <input className='search-form__input' type='search' placeholder='Фильм' required/>
                    <button className='search-form__button' type='search'
                        onClick={handlePreloader}>
                        <img className='search-form__find-icon'
                            src={findIcon}
                            alt='иконка поиск'/>
                    </button>
                </div>
                <div className='search-form__container'>
                    <FilterCheckbox showIcon={showTumbler}
                        onToggle={handleToggle}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
