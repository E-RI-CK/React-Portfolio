import { useEffect, useState } from 'react';
import { TypeWritterInf } from '../../components';
import './About.css';
import { AboutItem } from './components/AboutItem';

export const About = () => {

  const [aboutData, setAboutData] = useState(undefined);
  const [displayPage, setDisplayPage] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch('/json/aboutData.json');
      const data = await response.json();
      setAboutData(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const displayAboutPage = setTimeout(() => {
      setDisplayPage(true)
    }, 100);

    return () => {
      clearTimeout(displayAboutPage);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <main className="about-main">
        {(displayPage)
          ? (<>
            <div>
              <h1 className="about-h1">
                <TypeWritterInf text={"<About Me/>"} delay={100} color={"#fff"} />
              </h1>
            </div>
            <div className="about-items-list">
              <div className='timeline'>
                <div className='bullet'>
                </div>
              </div>
              <div className="about-content">
                {
                  aboutData.map((el) => {
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
