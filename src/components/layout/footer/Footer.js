import './Footer.scss'
import Logo from '../../function/logo/Logo';

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-top">1</div>
            <div className="footer-header">
                <div className="col-1"></div>
            <div className="card-footer-1">
                <Logo />
                <div className="text-footer-box">
                    <p>Building digital products, brands & experience</p>
                </div>
            </div>
            <div className="card-footer-1">
                <div className="logo-footer"><h1 >Resources</h1></div>
                <div className="text-footer-box">
                    <p>Guides</p>
                </div>
                <div className="text-footer-box">
                    <p>Blog</p>
                </div>
                <div className="text-footer-box">
                    <p>Cuistomer Stories</p>
                </div>
                <div className="text-footer-box">
                    <p>Glossery</p>
                </div>
            </div>
            <div className="card-footer-1">
                <div className="logo-footer"><h1 >Company</h1></div>
                <div className="text-footer-box">
                    <p>About Us</p>
                </div>
                <div className="text-footer-box">
                    <p>Careers</p>
                </div>
                <div className="text-footer-box">
                    <p>Partners</p>
                </div>
                <div className="text-footer-box">
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="card-footer-1">
                <div className="logo-footer"><h1 >Social Media</h1></div>
                <div className="text-footer-box">
                    <p>LinkedIn</p>
                </div>
                <div className="text-footer-box">
                    <p>Facebook</p>
                </div>
                <div className="text-footer-box">
                    <p>Instagram</p>
                </div>
                <div className="text-footer-box">
                    <p>Twitter</p>
                </div>
            </div>
            </div>
            <div className="footer-bottom">1</div>
            <div className="footer-footer">
                <p>
                © Matheus. Todos os direitos reservados
                </p>
            </div>
        </div>
    );
}

export default Footer;