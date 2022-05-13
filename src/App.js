// import './index.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/rooms"><Rooms/></Route>
      <Route exact path="/rooms/:slug">
        <SingleRoom/>
        </Route>
        
      <Route><Error/></Route>
    </Switch>
    </>
  );
}

export default App;
