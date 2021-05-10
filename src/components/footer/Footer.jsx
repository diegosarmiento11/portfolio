import React from 'react';
import './_footer.scss';
import Github from '../../assets/images/github.png';
import Figma from '../../assets/images/figma.png';
import Whatsapp from '../../assets/images/whatsapp.png';

function Footer(props) {
    return (
        <>
            <div className="footer__container">
                <a href="https://github.com/diegosarmiento11">
                    <img className="footer__images" src={Github} alt="Github"/>
                </a>
                <a href="https://www.figma.com/file/iO3Nl0D7lpjdQf6Cn0kuTO/Untitled?node-id=11%3A0">
                    <img className="footer__images" src={Figma} alt="Figma"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=573142968917">
                    <img className="footer__images" src={Whatsapp} alt="Whatsapp"/>
                </a>
            </div>
            <div className="footer__p--container">
                <p className="footer__p">
                    Designed, builded and shared by Diego Sarmiento 👌🏻😁 with ❤️ from 🇨🇴 - 2021
                </p>
            </div>
        </>
    );
}

export default Footer;
