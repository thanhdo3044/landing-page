import "./Content.scss";

function Content({children,big = false , fit = false , small= false ,fit0 = false ,companiess = false}){

    let classes = '';
    if(big){
        classes = 'big'
    }
    else if(fit){
        classes = 'fit'
    }
    else if(small){
        classes = 'small'
    }
    else if(fit0){
        classes = 'fit0'
    }
    else if(companiess){
        classes = 'companiess';
    }
    return (
        <div className={`${classes}`}>
            <p>{children}</p>
        </div>
    );
}

export default Content;