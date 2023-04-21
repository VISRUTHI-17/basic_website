import './App.css';
import Header from './Header';
import MainPage from './MainPage';
import Navigation from './Navigation';

function App() {
  return (
  <div className='app-div'>
    <Navigation/>
    <div className='app-column-div'>
    <Header/>
    <MainPage/>

    </div>
    
  </div>
    

    
  );
}

export default App;
