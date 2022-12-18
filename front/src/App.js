import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import CreatingPage from './Components/CreatingPage/CreatingPage';
import GameWindowContainer from './Components/GameWindow/GameWindowContainer'
import StartWindow from './Components/StartWindow/StartWindow';

function App() {

  return (
    <BrowserRouter>
    <div className={classes.App}>
        <Routes>
          <Route path='/battle' element={<GameWindowContainer />} />
          <Route path='/creating_field' element={<CreatingPage/>}/>
          <Route path='/' element={<StartWindow />} /> 
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
