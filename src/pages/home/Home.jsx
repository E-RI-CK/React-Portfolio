import { useContext, useState } from "react";
import { LanguageButton, NavBar, TypeWritter, TypeWritterInf } from "../../components";
import './Home.css';
import { SocialNetworks } from "../../components/SocialNetworks";
import { useLoader, useTranslation } from "../../hooks";
import { Loader } from "../../components/Loader/Loader";
import { TranslationContext } from "../../context/TranslationContext";


export const Home = () => {

  const [continueWord, setContinueWord] = useState(false);
  const [continueWord2, setContinueWord2] = useState(false);
  const { translation, key } = useTranslation();
  const { loading } = useLoader();
  const { changeLanguage } = useContext(TranslationContext);

  const handleButtonClick = () => {
    const link = document.createElement('a');
    link.href = '../cv/Andro_Valero_CV.pdf';
    link.download = 'Andro_Valero_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>{
      (loading) ?
        (<Loader />) :
        (
          <>
            <NavBar />
            <LanguageButton changeLanguage={changeLanguage} />
            <main className="home-main" key={key}>
              <div className="home-container">
                <div className="home">
                  <div className="photo">
                    <figcaption>
                      <img src="../assets/foto.jpg" alt="photo" />
                    </figcaption>
                  </div>
                  <div className="description">
                    <h3 className="description-title" data-section="home" data-value="descriptionTitle">
                      <TypeWritter
                        text={translation?.home?.descriptionTitle || ''}
                        delay={58}
                        onHandleContinueWord={setContinueWord}
                      />
                    </h3>
                    <h5 className="description-body" data-section="home" data-value="descriptionBody">
                      {
                        (continueWord)
                          ? (<TypeWritter text={translation?.home?.descriptionBody || ''} delay={35} onHandleContinueWord={setContinueWord2} />)
                          : <></>
                      }

                    </h5>
                    <h5 className="description-body2" data-section="home" data-value="descriptionBody2">
                      {
                        (continueWord2)
                          ? (<TypeWritterInf text={translation?.home?.descriptionBody2 || ''} delay={50} color={"#9a9a9a"} />)
                          : <></>
                      }
                    </h5>
                  </div>
                  <button className="download-btn animate__animated animate__flip" onClick={handleButtonClick}>
                    {translation?.home?.btnText}
                  </button>
                </div>
                <SocialNetworks />
              </div>
            </main>
          </>
        )
    }
    </>
  )
}
