import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/' component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
