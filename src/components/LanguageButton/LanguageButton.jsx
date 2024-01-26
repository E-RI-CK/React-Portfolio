import './LanguageButton.css';

export const LanguageButton = ({ changeLanguage }) => {
    return (
        <div className='country-flags'>
            <ul className='flags-container' onClick={changeLanguage}>
                <li className="flag-item" data-language="es"><img src="../assets/spain_flag.svg" alt="" /></li>
                <li className="flag-item" data-language="en"><img src="../assets/usa_flag.svg" alt="" /></li>
            </ul>
        </div>
    )
}
