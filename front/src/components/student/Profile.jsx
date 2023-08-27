import React from 'react';
import './student.css';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Logo from '../../images/mini-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Profile = () => {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    try {
      axios
        .get('http://graduate-programs.helwan.edu.eg/law/student/studentdetails', { withCredentials: true })
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          navigate('/login');
        });
    } catch (error) {
    }
  }, []);

  return (
    <>
      <Navbar User={user} />
      <div className="g-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <Outlet User={user} />
      </div>
    </>
  );
};

export default Profile;