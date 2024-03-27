import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function playerAddinfo() {
  
  const location = useLocation();
  //console.log("location ", location.state)

  const context = useContext(offerContext)
  const { PlayerAdd, host } = context


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/transaction');
  };

  let [userInfo, SetuserInfo] = useState({
    retailer: '',
    country: 'India',
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    deviceId: '111',
    isVIP: 1,
    Iscom: 0
  })

  //   useEffect(() => {

  //     const submitdata = async () => {
  //         SetuserInfo({
  //           name: Botinfo.UserName,
  //           profileUrl: Botinfo.img,
  //           status: Botinfo.Status,
  //           country:"india"
  //         })

  //     }
  //     submitdata()
  // },[]);

  const OnChange = (event) => {
    let { name, value } = event.target;

    value = (value?.toLowerCase?.() === 'true') ? true : false


    SetuserInfo({
      ...userInfo,
      [name]: value,
    });


    console.log("handleChange ::::::::::::::::::::::", userInfo)

  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("value :::::::::::::::::", value)
    console.log("name :::::::::::::::::", name)


  

    SetuserInfo({
      ...userInfo,
      [name]: value,
    });

    console.log("handleChange ::::::::::::::::::::::", userInfo)

  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("userInfo ", userInfo)

    if(!/^[a-zA-Z\s]+$/.test(userInfo.name)  ){
      alert("Invalid User name. User name should only contain alphabetic characters and spaces.")
      return false
    }

    if(userInfo.name.length < 3){
      alert("Invalid User name. User name should have minimum 3 characters.")
      return false
    }

    if(!/^[1-5]\d{9}$|^6\d{9}$/.test(userInfo.mobileNumber)){
      alert("Invalid mobile number. Mobile number should start with 1 and be exactly 10 digits long.")
      return false
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)){
      alert("Invalid email format.")
      return false
    }
    
    if(userInfo.password.length < 8){
      alert("Invalid passwordValue leangth Must be 8 characters.")
      return false
    }
    


    let res = await PlayerAdd(userInfo)

    console.log("REsponce ::::::::::::::::::::::", res)

    if (res.restatus) {
      navigateToContacts()
    } else {
      alert(res.msg)
    
    }
    console.log("res ",res);
  };


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
        User Registration
        </h3>
        <div className="mt-8">
          <form action="">
            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                User Name
                </label>


                <input
                  type="text"
                  id="name"
                  placeholder="Please Insert Name"
                  name="name"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  pattern="[A-Za-z\s]+"
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobilenumber"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Mobile Number
                </label>


                <input
                  type="text"
                  id="mobileNumber"
                  placeholder="Please Insert Mobile Number"
                  name="mobileNumber"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                  minLength="10" // Minimum length of 10 characters
                  maxLength="10" // Maximum length of 10 characters
                  pattern="[1-9][0-9]{9}"
                  required
                />

              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Email"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Email
                </label>


                <input
                  type="text"
                  id="email"
                  placeholder="Please Insert Email"
                  name="email"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                  required 
                />

              </div>


              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobilenumber"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Password
                </label>


                <input
                  type="text"
                  id="password"
                  placeholder="Please Insert password"
                  name="password"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                  minLength="8" 
                  required 
                />

              </div>


            </div>

            <div className="flex justify-end">
              <button
                aria-label="none"
                className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
                onClick={handleSubmit}
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default playerAddinfo;