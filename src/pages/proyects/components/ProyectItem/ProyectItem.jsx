import { TechnologyItem } from "../TechnologyItem/TechnologyItem"
import './ProyectItem.css';

export const ProyectItem = ({ title, imgBack, imgFront, technologies }) => {
    return (
        <li className="item">
            <a className="screen">
                <div className="bar">
                    <h4>{title}</h4>
                    <i></i>
                </div>
                <div className="main">
                    <picture className="back">
                        <img src={imgBack} alt="Imagen de Restaurante" />
                    </picture>
                    <div className="tags">
                        <div>
                            <ul>
                                {
                                    technologies.map((el) => (
                                        <TechnologyItem key={technologies.indexOf(el)} el={el} technologies={technologies} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <picture className="front">
                        <img src={imgFront} alt="Imagen de Restaurante" />
                    </picture>
                </div>
            </a>
            <article className="item-description">
                <div className="description-container">
                    <p className="proyect-description">Web Page about a Arequipa Restaurant</p>
                    <p className="date"><span style={{ marginLeft: "1rem" }}><iconify-icon icon="uiw:date"></iconify-icon>Marzo 2023</span></p>
                    <p className="technologies"><span style={{ marginLeft: "1rem" }}><iconify-icon icon="iconoir:tools"></iconify-icon></span>HTML, CSS, Wordpress</p>
                </div>
                <div className="links-container">
                    <a href=""><span><iconify-icon icon="line-md:github-loop"></iconify-icon>Github</span></a>
                    <a href=""><span><iconify-icon icon="carbon:demo"></iconify-icon>Demo</span></a>
                </div>
            </article>
        </li>
    )
}
