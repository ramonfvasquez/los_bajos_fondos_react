import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import AutorPage from './pages/AutorPage';
import ContactoPage from './pages/ContactoPage';
import ElencoPage from './pages/ElencoPage';
import FotosPage from './pages/FotosPage';
import ObraPage from './pages/ObraPage';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Los Bajos Fondos</title>
      </Helmet>
      <Header />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={ObraPage} />
          <Route path='/autor' exact component={AutorPage} />
          <Route path='/elenco' exact component={ElencoPage} />
          <Route path='/fotos' exact component={FotosPage} />
          <Route path='/contacto' exact component={ContactoPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
