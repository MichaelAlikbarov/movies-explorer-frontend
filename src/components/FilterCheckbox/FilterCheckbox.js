import './FilterCheckbox.css';

export default function FilterCheckbox({showIcon, onToggle}) {
    return (
        <>
            <button className='search-form__tumbler' type='button'
                onClick={onToggle}>
                <img className='search-form__tumbler-icon' id='toggle'
                    src={showIcon}
                    alt='переключатель'/>
            </button>
            <label htmlFor='toggle' className='search-form__subtitle'>Короткометражки</label>
        </>
    )
}
