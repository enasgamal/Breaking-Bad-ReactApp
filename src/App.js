import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Quotes from './components/quotes/Quotes';
import Episodes from './components/episodes/Episodes';
import Characters from './components/characters/Characters';
import Deaths from './components/death/Deaths';
import DeathDetails from './components/death/DeathDetails';
import EpisodesDetails from './components/episodes/EpisodesDetails';

const App=()=> {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
                <Route exact path="/" component={Characters}/>
                <Route exact path="/characters" component={Characters}/>
                <Route exact path="/quotes" component={Quotes}/>
                <Route exact path="/episodes" component={Episodes}/>
                <Route exact path="/episodes/:id" component={EpisodesDetails}/>
                <Route exact path="/deaths" component={Deaths}/>
                <Route exact path="/deaths/:name" component={DeathDetails}/>       
        </Switch> 
      </Router>
      <Footer/>
    </div>
  );
}
export default App;
