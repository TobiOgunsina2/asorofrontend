import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header bgColor={'green'} completed={30}/>
        
      <Footer/>
    </div>
  );
}

export default App;
