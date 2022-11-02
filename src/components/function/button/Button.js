import './button.scss'
function Button({children,primary = false, sizebtn = false}){

    let classes =''
    if(primary){
        classes ='primary'
    }else if(sizebtn){
        classes='sizebtn'
    }

    return(
        <button className={`button ${classes}`}>
            <span>
                {children}
            </span>
        </button>
    )
}


export default Button;