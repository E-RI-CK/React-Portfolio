import { useEffect, useState } from 'react';
import { TypeWritterInf } from '../../components';
import './About.css';
import { AboutItem } from './components/AboutItem';
import { useTranslation } from '../../hooks';


export const About = () => {

  const [displayPage, setDisplayPage] = useState(false);
  const { translation, key } = useTranslation();

  useEffect(() => {
    const displayAboutPage = setTimeout(() => {
      setDisplayPage(true)
    }, 100);

    return () => {
      clearTimeout(displayAboutPage);
    }
  }, [translation]);

  return (
    <>
      <main className="about-main" key={key}>
        {(displayPage)
          ? (<>
            <div>
              <h1 className="about-h1">
                <TypeWritterInf text={translation?.about?.title} delay={100} color={"#fff"} />
              </h1>
            </div>
            <div className="about-items-list">
              <div className='timeline'>
                <div className='bullet'>
                </div>
              </div>
              <div className="about-content">
                {
                  translation?.about?.content.map((el) => {
                    return (
                      <AboutItem key={el.id} {...el} />
                    )
                  })
                }
              </div>
            </div>
          </>)
          : <></>
        }
      </main>
    </>
  )
}