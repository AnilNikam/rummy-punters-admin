import logoColor from "../../assets/images/logo/logo-color.png";
import logoWhite from "../../assets/images/logo/logo-white.png";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import PasswordResetModal from "../modal/PasswordResetModal";
import { useState,useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const host = "http://192.168.0.203:3000" //"http://64.23.141.200:3000";//


function LeftSide() {
  const navigate = useNavigate();



  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    const rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedUsername) {
      setRememberMe(true);

      setFormData({
        email:rememberedUsername,
        password:rememberedPassword
      })

    }
    
    document.querySelector("html").classList = "dark";

  }, []);


  const navigateToContacts = () => {
 
    navigate('/dashboard');
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const LoginData = async (data) => {
    try {
      console.log("PlayerList :::::::", host)

      const response = await fetch(`${host}/admin/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(d => d.json())
      console.log("data api from :LoginData :::...", response)
      return response
    } catch (e) {
      console.log("e :", e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      // If "Remember Me" is checked, store the username in local storage
      localStorage.setItem('rememberedUsername', formData.email);
      localStorage.setItem('rememberedPassword', formData.password);

    } else {
      // If "Remember Me" is not checked, remove the username from local storage
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');

    }

    let resData = await LoginData(formData)
    console.log(resData.status)

    if (resData.status) {

      cookies.set('token', resData.data.token);
      cookies.set('name', resData.data.name);
      cookies.set('email', resData.data.email);

      navigateToContacts()

    } else {
      alert("Please Enter valid Email Or Passward..!!")
    }
  };

  return (
    
    <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
      <PasswordResetModal
        isActive={modalOpen}
        modalData={modalData}
        handelModalData={setModalData}
        handleActive={setModalOpen}
      />
      <header>
        <Link to="/" className="">
          <img src={logoColor} className="block dark:hidden" alt="Logo" />
          <img src={logoWhite} className="hidden dark:block" alt="Logo" />
        </Link>
      </header>
      <div className="max-w-[450px] m-auto pt-24 pb-16">
        <header className="text-center mb-8">
          <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
            Sign in to LegitRummy.
          </h2>
          <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
          </p>
        </header>
       
          <div className="mb-4">
            <input
              type="text"
              className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
              placeholder="Username or email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ fontSize: '50px' }}
              className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
              placeholder="Password"
            />
           
          </div>
          <div className="flex justify-between mb-7">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-5 h-5 dark:bg-darkblack-500 focus:ring-transparent rounded-full border border-bgray-300 focus:accent-success-300 text-success-300"
                name="remember"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember"
                className="text-bgray-900 dark:text-white text-base font-semibold"
              >
                Remember me
              </label>
            </div>
            
          </div>
          <a
            href="index.html"
            className="py-3.5 flex items-center justify-center text-white font-bold bg-success-300 hover:bg-success-400 transition-all rounded-lg w-full"
            onClick={handleSubmit}
          >
            Sign In
          </a>
        <p className="text-bgray-600 dark:text-white text-center text-sm mt-6">
          @ 2023 LegitRummy. All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
