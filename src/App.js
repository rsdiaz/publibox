import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Ocasion from "./Ocasion"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://www.beepbox.es/img/beepbox--w.svg" alt="Logo BEEPBOX" />
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path='/ocasion/:id' component={Ocasion} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
