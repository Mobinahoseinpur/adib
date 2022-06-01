import { Fragment } from 'react';
import Content from './component/content/Content';
import Footer from './component/Footer';
import Header from './component/Header';
import RoutPage from '../src/RoutPage'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Fragment>
    
      <BrowserRouter>
        <RoutPage/>
      </BrowserRouter>
      
      
    </Fragment>
    );
}

export default App;
