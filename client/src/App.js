import Header from './pages/header.js';
import LandingPage  from './pages/LandingPage.js';
import Preloader from './pages/preloader.js';
import Footer from './pages/footer.js';
import Feedback from './pages/feedback.js';




import './App.css';

function App() {




  return (
    <div className="App">
    
     < Preloader />
     < Header / > 
     < LandingPage /> 
     <Feedback />
     < Footer />



    </div>

  );
}

export default App;
