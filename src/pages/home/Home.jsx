import { useState } from "react";
import { TypeWritter, TypeWritterInf } from "../../components";
import './Home.css';
import { firstParagraph, secondParagraph } from "../../data";
import { SocialNetworks } from "../../components/SocialNetworks";

export const Home = () => {

  const [continueWord, setContinueWord] = useState(false);
  const [continueWord2, setContinueWord2] = useState(false);

  return (
    <>
      <main className="home-main">
        <div className="home-container">
          <div className="home">
            <div className="photo">
              <figcaption>
                <img src="../assets/foto.jpg" alt="photo" />
              </figcaption>
            </div>
            <div className="description">
              <h3 className="description-title">
                <TypeWritter text="Hello, My name is Andro Valero!" delay={58} onHandleContinueWord={setContinueWord} />
              </h3>
              <h5 className="description-body">
                {
                  (continueWord)
                    ? (<TypeWritter text={firstParagraph} delay={35} onHandleContinueWord={setContinueWord2} />)
                    : <></>
                }

              </h5>
              <h5 className="description-body2">
                {
                  (continueWord2)
                    ? (<TypeWritterInf text={secondParagraph} delay={50} color={"#9a9a9a"} />)
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
