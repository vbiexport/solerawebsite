import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CleeQ from './Pages/Solera/CleeQ';

function App() {
  return ( 
    <div> 
      <Router>
        <Switch>  
          <Route path="/" exact component={CleeQ} /> 
        </Switch>
      </Router> 
    </div>
  );
}

export default App;



