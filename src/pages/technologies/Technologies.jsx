import { useTranslation } from '../../hooks/useTranslation';
import './Technologies.css';
import { LanguageButton, NavBar } from '../../components';
import { Loader } from '../../components/Loader/Loader';
import { useLoader } from '../../hooks';
import { TranslationContext } from '../../context/TranslationContext';
import { useContext } from 'react';


export const Technologies = () => {

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
            < main className="technologies-main" key={key}>
              <section className="technologies-img animate__animated animate__zoomIn">
                <article>
                  <figure>
                    <img src="../assets/programmer.jpg" alt="programador" />
                  </figure>
                </article>
              </section>
              <section className="technologies-icons-container">
                <article className="technologies-description">
                  <h3>{translation?.technologies?.titleTechnologies}</h3>
                </article>
                <div className='technologies-icons'>
                  <article className="i-main-color html-container animate__animated animate__bounceInUp">
                    <i className="fa-brands fa-html5"></i>
                    <h4>HTML</h4>
                  </article>
                  <article className="i-main-color css-container animate__animated animate__bounceInLeft">
                    <i className="fa-brands fa-css3-alt"></i>
                    <h4>CSS</h4>
                  </article>
                  <article className="i-main-color materialui-container animate__animated animate__bounceInRight">
                    <iconify-icon icon="mdi:material-ui"></iconify-icon>
                    <h4>Material UI</h4>
                  </article>
                  <article className="i-main-color js-container animate__animated animate__bounceInDown">
                    <i className="fa-brands fa-js"></i>
                    <h4>Javascript</h4>
                  </article>
                  <article className="i-main-color react-container animate__animated animate__bounceInUp">
                    <i className="fa-brands fa-react"></i>
                    <h4>React</h4>
                  </article>
                  <article className="i-main-color redux-container animate__animated animate__bounceInLeft">
                    <iconify-icon icon="bxl:redux"></iconify-icon>
                    <h4>Redux</h4>
                  </article>
                  <article className="i-main-color nodejs-container animate__animated animate__bounceInRight">
                    <i className="fa-brands fa-node-js"></i>
                    <h4>Node JS</h4>
                  </article>
                  <article className="i-main-color mongodb-container animate__animated animate__bounceInDown">
                    <iconify-icon icon="cib:mongodb"></iconify-icon>
                    <h4>MongoDB</h4>
                  </article>
                  <article className="i-main-color firebase-container animate__animated animate__bounceInUp">
                    <iconify-icon icon="simple-icons:firebase"></iconify-icon>
                    <h4>Firebase</h4>
                  </article>
                  <article className="i-main-color git-container animate__animated animate__bounceInLeft">
                    <i className="fa-brands fa-git-alt"></i>
                    <h4>Git</h4>
                  </article>
                </div>
                <article className="technologies-description">
                  <h3>{translation?.technologies?.titleTools}</h3>
                </article>
                <div className='technologies-icons'>
                  <article className="i-main-color vscode-container animate__animated animate__bounceInUp">
                    <iconify-icon icon="devicon-plain:vscode"></iconify-icon>
                    <h4>VS Code</h4>
                  </article>
                  <article className="i-main-color postman-container animate__animated animate__bounceInLeft">
                    <iconify-icon icon="devicon-plain:postman"></iconify-icon>
                    <h4>Postman</h4>
                  </article>
                  <article className="i-main-color github-container animate__animated animate__bounceInRight">
                    <iconify-icon icon="ri:github-fill"></iconify-icon>
                    <h4>GitHub</h4>
                  </article>
                </div>
              </section>
            </main >
          </>
        )
    }
    </>
  )
}
