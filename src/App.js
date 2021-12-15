import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import Transparencia from './components/Transparencia';
import EscolhaContribuicao from './components/EscolhaContribuicao';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import ApoieUmaCausa from './components/HomeComponents/ApoieUmaCausa';
import NossosParceiros from './components/HomeComponents/NossosParceiros';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
         
          {/* Rotas para deploy*/}
          <Route exact path="/TCC/build/" element={<Home/>} />
          <Route path="/TCC/build/quem-somos" element={<QuemSomos/>}/>
          <Route path="/TCC/build/transparencia" element={<Transparencia/>}/>
          <Route path="/TCC/build/contribuicao" element={<EscolhaContribuicao/>}/>
          <Route path="/TCC/build/apoie-uma-causa" element={<ApoieUmaCausa/>}/>
          <Route path="/TCC/build/nossos-parceiros" element={<NossosParceiros/>}/> 
          
         

          {/* Rotas para local-host */}
          
            {/* <Route exact path="/" element={<Home/>} />
            <Route path="/quem-somos" element={<QuemSomos/>}/>
            <Route path="/transparencia" element={<Transparencia/>}/>
            <Route path="/contribuicao" element={<EscolhaContribuicao/>}/>
            <Route path="/apoie-uma-causa" element={<ApoieUmaCausa/>}/>
            <Route path="/nossos-parceiros" element={<NossosParceiros/>}/>  */}
         


        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
