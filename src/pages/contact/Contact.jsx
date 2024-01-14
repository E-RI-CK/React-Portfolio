import { useEffect, useState } from 'react';
import { TypeWritterInf } from '../../components/TypeWritterInf/TypeWritterInf';
import './Contact.css';
import { useForm } from '../../hooks';

export const Contact = () => {

    const { formState, formReset, onInputChange, name, email, message } = useForm({
        name: "",
        email: "",
        message: ""
    });

    const onSubmit = (event) => {
        event.preventDefault();
        formReset();
    }

    return (
        <>
            <main className="contact-main">
                <section className='contact-container'>
                    <article className='contact-description'>
                        <article className='contact-title'>
                            <h4><TypeWritterInf text={"<Get in Touch/>"} color={"#fff"} delay={50}></TypeWritterInf></h4>
                        </article>
                        <article className='contact-description'>
                            <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,fill up the awesome form below or send an email to <b>androvalero777@gmail.com</b> and let's talk.</p>
                        </article>
                    </article>
                    <article className='form-container'>
                        <form onSubmit={onSubmit}>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{
                                    color: "#eee"
                                }}>Nombres</label>
                                <input type="text" name="name" value={name} onChange={onInputChange} placeholder="Fill with your name" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{
                                    color: "#eee"
                                }}>Email</label>
                                < input type="email" name="email" value={email} onChange={onInputChange} placeholder='now your email address
' className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{
                                    color: "#eee"
                                }}>Mensaje</label>
                                < input type="text" name="message" value={message} onChange={onInputChange} placeholder='now write your awesome message :)
' className="form-control" id="exampleInputEmail1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </article>
                    <article className='social-media-container'>
                        <div className='social-media-description'>
                            <h3 className='social-media-title'>Let's get social</h3>
                            <p className='social-media-text'>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
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
