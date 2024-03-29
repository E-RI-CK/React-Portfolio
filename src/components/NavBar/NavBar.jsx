import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useTranslation } from '../../hooks';


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { translation, key } = useTranslation();

    const onBurgerToggle = () => {
        setIsOpen(false);
    }

    return (
        <>
            <header key={key}>
                <div className='navbar-container' style={{
                    transform: `${isOpen ? 'translate3d(0,0%,0)' : 'translate3d(0,-100%,0)'}`
                }}>
                    < nav className='navbar' >
                        <div className='my-name' style={{ fontSize: '2rem' }}>
                            <NavLink to={'/'} onClick={onBurgerToggle} >
                                <img src={'../assets/av_f.svg'} alt='logo' />
                            </NavLink >
                        </div>
                        <div className='navlink-container'>
                            <NavLink to={'/about'} onClick={onBurgerToggle} >
                                <span className='li-word'>{translation?.navbar?.aboutMe}</span>
                                <div className='green-lines-container'>
                                    <span className='li-footer-left'></span>
                                    <span className='li-footer-right'></span>
                                </div>
                            </NavLink>
                            <NavLink to={'/technologies'} className="a-link" onClick={onBurgerToggle}>
                                <span className='li-word'>{translation?.navbar?.technologies}</span>
                                <div className='green-lines-container'>
                                    <span className='li-footer-left'></span>
                                    <span className='li-footer-right'></span>
                                </div>
                            </NavLink>
                            <NavLink to={'/proyects'} onClick={onBurgerToggle}>
                                <span className='li-word'>{translation?.navbar?.proyects}</span>
                                <div className='green-lines-container'>
                                    <span className='li-footer-left'></span>
                                    <span className='li-footer-right'></span>
                                </div>
                            </NavLink>
                            {/* <NavLink to={'/experiencie'} onClick={onBurgerToggle}>
                                <span className='li-word'>Experience</span>
                                <div className='green-lines-container'>
                                    <span className='li-footer-left'></span>
                                    <span className='li-footer-right'></span>
                                </div>
                            </NavLink> */}
                            <NavLink to={'/contact'} onClick={onBurgerToggle}>
                                <span className='li-word'>{translation?.navbar?.contactMe}</span>
                                <div className='green-lines-container'>
                                    <span className='li-footer-left'></span>
                                    <span className='li-footer-right'></span>
                                </div>
                            </NavLink>
                        </div>
                    </nav >
                </div >
                <Hamburger toggled={isOpen} toggle={setIsOpen} color="#66c95b" />
            </header>
        </>
    )
}
