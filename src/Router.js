import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServiceDetails from './pages/ServiceDetails';
import NotFoundPage from './pages/NotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
