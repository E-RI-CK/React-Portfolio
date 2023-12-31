import './AboutItem.css';

export const AboutItem = ({ label, src, title, extraData }) => {

    return (
        <div className="about-item">
            <div className='label-content'>
                <p className='label-text'>
                    {label}
                </p>
            </div>
            <div className='item-box'>
                <div className="about-icon">
                    <figcaption>
                        <img src={src} />
                    </figcaption>
                </div>
                <div className="about-description">
                    <p className='descritpion-title'>{title}</p>
                    <p className='description-extra-data'>{extraData}</p>
                </div>
            </div>
        </div>
    )
}
