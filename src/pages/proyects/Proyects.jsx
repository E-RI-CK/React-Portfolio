import { TypeWritterInf } from '../../components/TypeWritterInf/TypeWritterInf';
import './Proyects.css';
import { ProyectItem } from './components/ProyectItem/ProyectItem';
import { useTranslation } from '../../hooks/useTranslation';

export const Proyects = () => {

  const { translation, key } = useTranslation();


  return (
    <>
      <main className='proyects-main' key={key}>
        <section className='proyects-title'>
          <h2 className={"animate__animated animate__zoomIn"}>
            <TypeWritterInf text={translation?.proyects?.title || ''} delay={100} color={"#fff"} />
          </h2>
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
