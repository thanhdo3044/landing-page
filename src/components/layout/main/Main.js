import Button from '../../function/button/Button';
import Content from '../../function/content/Content';
import Img from '../../../image/img/Image';
import img1 from '../../../image/img1.png'
import img12 from '../../../image/img2.png'
import img13 from '../../../image/img3.png'
import img8 from '../../../image/img10.png'
import img2 from '../../../image/spotify.png'
import img3 from '../../../image/slack.png'
import img4 from '../../../image/dropbox.png'
import img5 from '../../../image/zoom.png'
import img6 from '../../../image/right-arrow.png'
import icon1 from '../../../image/icon1.png'
import './main.scss';
import Card from '../../function/card/Card';



function Main(){
    return (
        <>
            <div className="text-header">1</div>
            <div className="card-body">
            <div className="col-1"></div>
            <div className="col-5">
                <div className ="">
                    <Content big={true}>Building digital products, brands & experience</Content>
                </div>
                <div className = "ty-p2">
                    <Content small={true}>Digital Agency is your online team management tool that easy and prompt</Content>
                </div>

                <div className = "ty-p2">
                    <Button primary={true} >CONTACT US</Button>
                </div>
                
            </div>
            <div className="col-3">
                <Img src={img1} />
            </div>
            </div>
            <div className="text-header">1</div>
            <div className="companies">
                <p>Trusted by 4,000+ companies</p>
            </div>

            <div className="card-companies">
                <div className="col-1"></div>
                <div className="">
                <div className="box-icon">
                    
                    <div className="card-icon-box ">
                        <Img src={img2} />
                    </div>
                    <div className="card-mar">1</div>
                    <div className="card-icon-box">
                        <Img src={img3} />
                    </div>
                    <div className="card-mar">1</div>
                    <div className="card-icon-box">
                        <Img src={img4} />
                    </div>
                    <div className="card-mar">1</div>
                    <div className="card-icon-box">
                        <Img src={img5} />
                    </div>
                </div>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="text-header">1</div>
            <div className="card-body">
            <div className="col-1"></div>
            <div className="col-5">
                <Img src={img12} />
            </div>
            <div className="col-3">
                <div className ="">
                    <Content fit={true}>Branding & Design system</Content>
                </div>
                <div className = "ty-p2">
                    <Content small={true}>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</Content>
                </div>

                <div className = "ty-p2">
                    <div className ="img">
                        <Img src={img6} />
                    </div>
                </div>
                
            </div>
            
            </div>
            <div className="text-header">1</div>
            <div className="card-body">
            <div className="col-1"></div>
            <div className="col-5">
            <div className ="">
                    <Content fit={true}>Custome & Plugin Development</Content>
                </div>
                <div className = "ty-p2">
                    <Content small={true}>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</Content>
                </div>

                <div className = "ty-p2">
                    <div className ="img">
                        <Img src={img6} />
                    </div>
                </div>
            </div>
            <div className="col-3">   
                <Img src={img13} />   
            </div>
            
            </div>
            <div className="text-header">1</div>
            <div className="companies">
                <p>TESTIMONIALS</p>
            </div>
            <div className="companies-top">
                <Content companiess={true}>Read What Other have to Say</Content>
            </div>

            <div className="car-center">
                <Card
                    img={icon1}
                    title={"Andrew Rathore"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}
                     />
                     <Card
                    img={icon1}
                    title={"Andrew Rathore"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}
                     />
                     <Card
                    img={icon1}
                    title={"Andrew Rathore"}
                    content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}
                     />
            </div>
            <div className="text-header">1</div>
            
            <div className="col-1"></div>
            
            <div className="card-2-box">
            
            <div className="col-5">
            <div className ="img">
                        <Img src={img8} />
                    </div>
                
            </div>
            <div className="col-3"></div>
            <div className = "ty-p2">
            <div className ="">
                    <Content fit={true}>Building digital products, brands & experience</Content>
                </div>
                <div className = "ty-p2 mr1">
                    <Content small={true}>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</Content>
                </div>

                <div className = "ty-p2 ">
                    <Button sizebtn={true} className="button" >CONTACT US</Button>
                </div>
                    
                </div>
            </div>
            
            
        </>
    )
}

export default Main;