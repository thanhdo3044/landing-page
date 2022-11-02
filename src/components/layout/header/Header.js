import './Header.scss'
import Logo from '../../function/logo/Logo'
import Menu from '../../function/nav/Menu'

function Header(){
    return(
        <div className="Header">
            <div className="Logo">
                <Logo logo={true} />
            </div>
            <div className="Menu">
                <Menu />
            </div>
            <div className="col-sm-2"></div>
        </div>
    );
}

export default Header;