import "./Logo.scss"

function Logo({logo = false}){
    if(logo){
        logo = 'logo-header'
    }else{
        logo = 'logo-footer'
    }
    return (
        <div className={`${logo}`}><h1 >Digital Agency</h1></div>
    );
}

export default Logo;