import React from 'react';
import { auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import defaultIcon from '../assets/user-icon.png';
import './styles/Navbar.css';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return(
    <div className="Navbar">
      <h2 className="logo">Home</h2>

      <div className="userSection">
        {
          user?
          <img src={defaultIcon} className="userIcon" />
          :
          <img src={defaultIcon} className="userIcon" />

        }
      </div>
    </div>
  )
}
export default Navbar;