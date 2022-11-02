import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import Main from "../components/layout/main/Main"
import "./Home.scss"

function Home(){
    return(
        <div className = "container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;