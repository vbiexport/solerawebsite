
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import ConfirmPhoneNumber from './Pages/SignUp/ConfirmPhoneNumber';
import SignUpSuccessful from './Pages/SignUp/SignUpSuccessful';
import VerifyOTP from './Pages/SignUp/VerifyOTP';
import ForgotPassword from './Pages/Login/ForgotPassword';
import ChangePassword from './Pages/Login/ChangePassword';


function App() {
  return ( 
    <div> 
      <Router>
        <Switch>
           {/*  For Clique24 website */}
          <Route path="/" exact component={Home} />  
          <Route path="/Login" component={Login} /> 
          <Route path="/SignUp" component={Signup} />
          <Route path="/ConfirmPhoneNumber" component={ConfirmPhoneNumber} /> 
          <Route path="/SignUpSuccessful" component={SignUpSuccessful} /> 
          <Route path="/VerifyOTP" component={VerifyOTP} /> 
          <Route path="/ForgotPassword" component={ForgotPassword} /> 
          <Route path="/ChangePassword" component={ChangePassword} /> 
          

          
          
        </Switch>   
      </Router> 
    </div>
  );
}

export default App;



