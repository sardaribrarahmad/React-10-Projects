import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Contactform from './components/Contactform/Contactform';
import './App.css'

const App = () => {
  return ( <div>

    <Navigation />
    <main className="main_container">
    <ContactHeader />
    <Contactform />
    
    </main>
   

   

  </div>);
};

export default App; 
