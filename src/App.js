import './index.css'
import Content from './config/Content';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Content/>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
