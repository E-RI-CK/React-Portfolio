import { useState } from "react";
import { TypeWritter, TypeWritterInf } from "../../components";
import './Home.css';
import { SocialNetworks } from "../../components/SocialNetworks";
import { useTranslation } from "../../hooks";


export const Home = () => {

  const [continueWord, setContinueWord] = useState(false);
  const [continueWord2, setContinueWord2] = useState(false);
  const { translation, key } = useTranslation();

  return (
    <>
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
          </div>
          <SocialNetworks />
        </div>
      </main>
    </>
  )
}
