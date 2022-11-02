
// function Button({children,primary = false, sizebtn = false}){



//     let classes =''
//     if(primary){
//         classes ='primary'
//     }else if(sizebtn){
//         classes='sizebtn'
//     }

//     return(
//         <button className={`button ${classes}`}>
//             <span>
//                 {children}
//             </span>
//         </button>
//     )
// }


// export default Button;

import React from "react";
import './button.scss'


class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showCounter: true,
        };
        this.onClickMe = this.onClickMe.bind(this)
    }

    onClickMe(){
        this.setState({
            showCounter: false,
        })
    }
    render(){
        let temps = '';
        if(this.props.primary){
            temps ='primary'
        }else if(this.props.sizebtn)(
            temps = 'sizebtn'
        )
        return (
            <>   
            <button className={`button ${temps}`} onClick={this.onClickMe}>
            <span>
                {this.props.children}
            </span>
            </button>
            {this.state.showCounter && <Show />}
            </>
        )
    }
}

class Show extends React.Component{
    render(){
        return(
            <h1>Show !</h1>
        )
    }
    componentDidMount() {
        console.log('did mount');
    }

    componentWillUnmount() {
        console.log('un mount');
    }
    
}

export default Button