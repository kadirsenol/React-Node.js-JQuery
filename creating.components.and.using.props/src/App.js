import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from  './components/Main'

function App() {
  
  let headertext = "Burasi Header"
  
  return (
   <div className="container">
      <Header yazi={headertext}/>
      <Main yazi='Burasi main'/>
      <Footer yazi1='Burasi' yazi2=' footer'/>
   </div>
  );
}

export default App;
