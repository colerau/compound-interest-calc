import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CompInterestForm from './components/CompInterestForm.js'
import AmortizationForm from './components/AmortizationForm.js'

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Compound Interest Calculator</Link>
            </li>
            <li>
              <Link to="/amortization-calculator">Amortization Calculator</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <CompInterestForm />
            </Route>
            <Route path="/amortization-calculator">
              <AmortizationForm />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
