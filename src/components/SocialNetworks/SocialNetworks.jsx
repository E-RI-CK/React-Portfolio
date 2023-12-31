import { Link } from 'react-router-dom';
import './SocialNetworks.css';

export const SocialNetworks = () => {
    return (
        <div className="follow-me">
            <ul className='sn-container'>
                <li className='sn-box-linkedin'>
                    <Link to={'https://www.linkedin.com/in/andro-erick-valero-medina-63b90223b/'} target='_blank' className='a-sn-icon'>
                        <i className="fa-brands fa-linkedin-in" ></i>
                    </Link>
                </li>
                <li className='sn-box-github'>
                    <Link to={'https://github.com/E-RI-CK'} target='_blank' className='a-sn-icon'>
                        <i className="fa-brands fa-github" ></i>
                    </Link>
                </li>
                <li className='sn-box-whatsapp'>
                    <Link to={'https://wa.me/51940560235'} target='_blank' className='a-sn-icon'>
                        <i className="fa-brands fa-whatsapp" ></i>
                    </Link>
                </li>
            </ul>
        </div >
    )
}
