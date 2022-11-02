import Image from '../../../image/img/Image';
import Content from '../content/Content';
import './Card.scss'
function Card({title,content,img}){

    return(
        <div className={`card`}>
            <div className="py-5">1</div>
            <div className="card-header">
                <Image src={img} />
            </div>
            <div className="card-main">
                <p>{title}</p>
            </div>
            <div className="car-footer">
                    <Content fit0={true}>{content}</Content>
            </div>
        </div>
    )
}


export default Card;