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
          <article className="technologies-description">
            <h3>Skillset I Work With</h3>
          </article>
        </section>
        <section className="technologies-icons-container">
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
              <i class="fa-brands fa-js"></i>
              <h4>Javascript</h4>
            </article>
            <article className="i-main-color react-container">
              <i class="fa-brands fa-react"></i>
              <h4>React</h4>
            </article>
            <article className="i-main-color redux-container">
              <iconify-icon icon="bxl:redux"></iconify-icon>
              <h4>Redux</h4>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
