
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {

  //1000 tane içerik getirmek için main in içine {pler} yazıyoruz
  // const pler = [];
  // for (let index = 0; index < 1000; index++) {
  //   pler.push(<p>al sana paragraf</p>);
  // }
  return (
    <div className="App">
      <header>
    <div className='App-marka'>
     Kişisel Websitem <br />
      <small>kararlı adımlarla..</small> 
      </div>
      <nav className='nav-links'>
        <Link to="/">Anasayfa</Link>
        <Link to="/hakkinda">Hakkında</Link>
        <Link to="/iletisim">Iletisim</Link>
    
      </nav>
      </header>

      <main>
       <Outlet />
      </main>

      <footer>
        Her hakkı saklıdır &copy; 
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
