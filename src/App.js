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
      <title>
        Compound Interest and Amortization Calculator
      </title>

      <meta name="Description" content="Calculate the compound interest accrued on an investment. Or generate an amortization schedule." />

      <Router>
        <div>
          <div className="navBarLinks">
            <Link to="/">Compound Interest Calculator</Link>
            <br />
            <Link to="/amortization-calculator">Amortization Calculator</Link>
            <hr />
          </div>

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
