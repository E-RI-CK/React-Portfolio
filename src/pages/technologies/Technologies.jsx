import './Technologies.css';


export const Technologies = () => {
  return (
    <>
      <main className="technologies-main">
        <section className="technologies-img">
          <article>
            <figure>
              <img src="../assets/programmer.jpg" alt="programador" />
            </figure>
          </article>
        </section>
        <section className="technologies-icons-container">
          <article className="technologies-description">
            <h3>Skillset I Work With</h3>
          </article>
          <div className='technologies-icons'>
            <article className="i-main-color html-container">
              <i className="fa-brands fa-html5"></i>
              <h4>HTML</h4>
            </article>
            <article className="i-main-color css-container">
              <i className="fa-brands fa-css3-alt"></i>
              <h4>CSS</h4>
            </article>
            <article className="i-main-color materialui-container">
              <iconify-icon icon="mdi:material-ui"></iconify-icon>
              <h4>Material UI</h4>
            </article>
            <article className="i-main-color js-container">
              <i className="fa-brands fa-js"></i>
              <h4>Javascript</h4>
            </article>
            <article className="i-main-color react-container">
              <i className="fa-brands fa-react"></i>
              <h4>React</h4>
            </article>
            <article className="i-main-color redux-container">
              <iconify-icon icon="bxl:redux"></iconify-icon>
              <h4>Redux</h4>
            </article>
            <article className="i-main-color nodejs-container">
              <i className="fa-brands fa-node-js"></i>
              <h4>Node JS</h4>
            </article>
            <article className="i-main-color mongodb-container">
              <iconify-icon icon="cib:mongodb"></iconify-icon>
              <h4>MongoDB</h4>
            </article>
            <article className="i-main-color firebase-container">
              <iconify-icon icon="simple-icons:firebase"></iconify-icon>
              <h4>Firebase</h4>
            </article>
            <article className="i-main-color git-container">
              <i className="fa-brands fa-git-alt"></i>
              <h4>Git</h4>
            </article>
          </div>
          <article className="technologies-description">
            <h3>Tools I use</h3>
          </article>
          <div className='technologies-icons'>
            <article className="i-main-color vscode-container">
              <iconify-icon icon="devicon-plain:vscode"></iconify-icon>
              <h4>VS Code</h4>
            </article>
            <article className="i-main-color postman-container">
              <iconify-icon icon="devicon-plain:postman"></iconify-icon>
              <h4>Postman</h4>
            </article>
            <article className="i-main-color github-container">
              <iconify-icon icon="ri:github-fill"></iconify-icon>
              <h4>Postman</h4>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
