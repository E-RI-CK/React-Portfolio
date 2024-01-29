import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Contact, Experiencie, Home, Proyects, Technologies } from '../pages';
import { LanguageButton, NavBar } from '../components';
import { Suspense, lazy, useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

export const AppRouter = () => {

    const { changeLanguage } = useContext(TranslationContext);

    return (
        <>
            <Suspense fallback={<h1>Cargando...</h1>}>
                <NavBar />
                <LanguageButton changeLanguage={changeLanguage} />
                <Routes>
                    <Route path='/*' element={<Navigate to={'/'} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/experiencie' element={<Experiencie />} />
                    <Route path='/proyects' element={<Proyects />} />
                    <Route path='/technologies' element={<Technologies />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </>
    )
}
