import './style.css';
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer';

function Home(){
    return(
      <>
       <div className="home-container">
           <div className="home-content">
               <div className="home-actions">
                  <h1 className="home-title">
                      Faça seu pedido <br /> que entregmos <br /> pra você!!!
                      </h1> 
                      <h3 className="home-subtitle">Escolha o seu pedido e em pouco minutos <br />
                      levaremos na sua porta
                      </h3>
                      <a href="orders" className="home-btn-order">FAZER PEDIDO</a>
               </div>
               <div className="home-img">
                   <MainImage />
               </div>
           </div> 
           <Footer />
       </div>
      
      </>
    )

}

export default Home;