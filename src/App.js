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
  Link
} from "react-router-dom";
import ApoieUmaCausa from './components/HomeComponents/ApoieUmaCausa';
import NossosParceiros from './components/HomeComponents/NossosParceiros';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/TCC/build/" element={<Home/>} />
          <Route path="/TCC/build/quem-somos" element={<QuemSomos/>}/>
          <Route path="/TCC/build/transparencia" element={<Transparencia/>}/>
          <Route path="/TCC/build/contribuicao" element={<EscolhaContribuicao/>}/>
          <Route path="/TCC/build/apoie-uma-causa" element={<ApoieUmaCausa/>}/>
          <Route path="/TCC/build/nossos-parceiros" element={<NossosParceiros/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
