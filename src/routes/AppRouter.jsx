import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Contact, Experiencie, Home, Proyects, Technologies } from '../pages';
import { NavBar } from '../components';
export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/*' element={<Navigate to={'/'} />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/experiencie' element={<Experiencie />} />
                <Route path='/proyects' element={<Proyects />} />
                <Route path='/technologies' element={<Technologies />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}
