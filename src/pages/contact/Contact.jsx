import { TypeWritterInf } from '../../components/TypeWritterInf/TypeWritterInf';
import './Contact.css';
import { useForm, useLoader, useTranslation } from '../../hooks';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { LanguageButton, NavBar } from '../../components';
import { Loader } from '../../components/Loader/Loader';
import { TranslationContext } from '../../context/TranslationContext';
import { useContext } from 'react';


export const Contact = () => {

    const { translation, key } = useTranslation();
    const { loading } = useLoader();
    const { changeLanguage } = useContext(TranslationContext);
    const { formReset, onInputChange, name, email, message } = useForm({
        name: "",
        email: "",
        message: ""
    });



    const onSubmit = async (event) => {
        event.preventDefault();
        Swal.showLoading();
        try {
            await emailjs.sendForm('service_k90vkz8', 'template_4bx2fih', event.target, 'FmKi2XfQyiW0yvg_8');
            Swal.hideLoading();
            Swal.fire({
                title: `${translation?.contact?.contactAlert?.title}`,
                text: `${translation?.contact?.contactAlert?.text}`,
                icon: 'success',
            })
            formReset();
        } catch (error) {
            Swal.hideLoading();
            Swal.fire({
                title: `${translation?.contact?.contactAlert?.titleError}`,
                text: `${translation?.contact?.contactAlert?.textError}`,
                icon: 'error',
            })
        }
    }

    return (
        <>
            {
                (loading) ?
                    (<Loader />) :
                    (
                        <>
                            <NavBar />
                            <LanguageButton changeLanguage={changeLanguage} />
                            <main className="contact-main" key={key}>
                                <section className='contact-container'>
                                    <article className='contact-description'>
                                        <article className='contact-title'>
                                            <h4><TypeWritterInf text={translation?.contact?.title || ''} color={"#fff"} delay={50}></TypeWritterInf></h4>
                                        </article>
                                        <article className='contact-description'>
                                            <p>{translation?.contact?.contactDescription}</p>
                                        </article>
                                    </article>
                                    <article className='form-container'>
                                        <form onSubmit={onSubmit}>
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputPassword1" className="form-label" style={{
                                                    color: "#eee"
                                                }}>{translation?.contact?.firstInputName}</label>
                                                <input type="text" name="name" value={name} onChange={onInputChange} placeholder={translation?.contact?.firstInputPlaceholder} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label" style={{
                                                    color: "#eee"
                                                }}>{translation?.contact?.secondInputName}</label>
                                                < input type="email" name="email" value={email} onChange={onInputChange} placeholder={translation?.contact?.secondInputPlaceholder} className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label" style={{
                                                    color: "#eee"
                                                }}>{translation?.contact?.thirdInputName}</label>
                                                < input type="text" name="message" value={message} onChange={onInputChange} placeholder={translation?.contact?.thirdInputPlaceholder} className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">{translation?.contact?.btnName}</button>
                                        </form>
                                    </article>
                                    <article className='social-media-container'>
                                        <div className='social-media-description'>
                                            <h3 className='social-media-title'>{translation?.contact?.socialMedia}</h3>
                                            <p className='social-media-text'>{translation?.contact?.socialMediaDescription}</p>
                                        </div>
                                        <div className='social-media-btn-container'>
                                            <a href="https://www.facebook.com/androerick.valeromedina" target='_blank' className='facebook-btn'><span className='contact-icon'><iconify-icon icon="basil:facebook-solid"></iconify-icon></span><span className='icon-text'>FACEBOOK</span></a>
                                            <a href="https://www.linkedin.com/in/andro-erick-valero-medina-63b90223b/" target='_blank' className='linkedin-btn'><span className='contact-icon'><iconify-icon icon="akar-icons:linkedin-fill"></iconify-icon></span><span className='icon-text'>LINKEDIN</span></a>
                                            <a href="https://github.com/E-RI-CK" target='_blank' className='github-btn'><span className='contact-icon'><iconify-icon icon="mdi:github"></iconify-icon></span><span className='icon-text'>GITHUB</span></a>
                                        </div>
                                    </article>
                                </section>
                            </main >
                        </>
                    )
            }
        </>
    )
}
