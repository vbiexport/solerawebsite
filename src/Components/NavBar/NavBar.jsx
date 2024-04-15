import React from 'react'
import "../../Components/NavBar/NavBar.css";
import SoleraLogo from '../SoleraLogo';
import NavBarList from './NavBarList';
import SignUpAndLogin from '../SignUpAndLogin/SignUpAndLogin';
import NavBarRes from './NavBarRes';


function NavBar() {
  return (
    <>
    <div className="container NavBarContainer p-0">
      <div>
        <SoleraLogo/>
      </div>
      <div className="NavBarListDetails">
         <NavBarList /> 
      </div>
      <div className="SignUpAndLoginContianer22">
        <SignUpAndLogin /> 
      </div>
     
    </div>

  </>
  )
}

export default NavBar