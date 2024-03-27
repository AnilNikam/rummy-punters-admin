import AOS from "aos";
import "aos/dist/aos.css";
import {useState, useEffect } from "react";
import Router from "./Router";
import OfferState from './context/OfferState';
import Login from './component/signin/index';
import Dashboard from "./component/dashboard/Dashboard";
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const tokendata = cookies.get('token')
  const name = cookies.get('name')
  const email = cookies.get('email')

  console.log("tokendata LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",!tokendata)
  
  
  if (!tokendata) {

    //let gameName = location.search
    console.log("Location ",window.location)
    console.log("window.location.href ",window.location.href)

    var url = window.location.href.split("5180")
    console.log("URL ",url)

    if(url[1] != "/signin"){
      window.location.href = "http://51.21.131.138:5180/signin" //'http://rummylegit.com:5180/signin';//
      
      return false
    }
    //return (<Router><Login/></Router>)
  }


  return (
    <>
      <OfferState adminname={name} adminEmail={email} tokendata={tokendata}>
        <Router/>
      </OfferState>
    </>
  );
}

export default App;
