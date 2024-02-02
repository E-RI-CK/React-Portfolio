import { TypeWritterInf } from '../../components/TypeWritterInf/TypeWritterInf';
import './Proyects.css';
import { ProyectItem } from './components/ProyectItem/ProyectItem';
import { useTranslation } from '../../hooks/useTranslation';
import { useLoader } from '../../hooks/useLoader';
import { Loader } from '../../components/Loader/Loader';
import { LanguageButton, NavBar } from '../../components';
import { TranslationContext } from '../../context/TranslationContext';
import { useContext } from 'react';


export const Proyects = () => {

  const { translation, key } = useTranslation();
  const { loading } = useLoader();
  const { changeLanguage } = useContext(TranslationContext);
  return (
    <>{
      (loading) ?
        (<Loader />) :
        (
          <>
            <NavBar />
            <LanguageButton changeLanguage={changeLanguage} />
            <main className='proyects-main' key={key}>
              <section className='proyects-title'>
                <p className={"animate__animated animate__zoomIn"}>
                  <TypeWritterInf text={translation?.proyects?.title || ''} delay={100} color={"#fff"} />
                </p>
              </section>
              <section className='proyects-container'>
                <ul className="grid-list">
                  {
                    translation?.proyects?.proyectsArray.map((el) => (
                      <ProyectItem key={el.id} {...el} />
                    ))
                  }
                </ul>
              </section>
            </main>
          </>
        )
    }
    </>
  )
}
