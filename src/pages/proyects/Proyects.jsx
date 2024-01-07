import { useEffect, useState } from 'react';
import { TypeWritterInf } from '../../components/TypeWritterInf/TypeWritterInf';
import './Proyects.css';
import { ProyectItem } from './components/ProyectItem/ProyectItem';

export const Proyects = () => {

  const [proyects, setProyects] = useState(undefined);

  const getProyectsData = async () => {
    try {
      const res = await fetch('/json/proyectItems.json');
      const data = await res.json();
      setProyects(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getProyectsData();
  }, [])


  return (
    <>
      <main className='proyects-main'>
        <section className='proyects-title'>
          <h2>
            <TypeWritterInf text={"<My Recent Works/>"} delay={100} color={"#fff"} />
          </h2>
        </section>
        <section className='proyects-container'>
          <ul className="grid-list">
            {
              proyects?.map((el) => (
                <ProyectItem key={el.id} {...el} />
              ))
            }
          </ul>
        </section>
      </main>
    </>
  )
}
