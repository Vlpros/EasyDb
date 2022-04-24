import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './Pages/Main/Main';
import { Route, Routes } from 'react-router-dom';

import Open from './Open/Open';




function App() {
  return (
    <div>
      <Open />

      <div className='app-wrapper' >


        <div id='header' className='header' hidden>
          <Navbar />
          <div id='nav' className='navigation'>



          </div>

        </div>
        <div id='content' className='content' hidden>
          <Routes>

            <Route path='/main' element={<Main />} />

          </Routes>

        </div>


      </div>
    </div>


  )
}
export default App;
