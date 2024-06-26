import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function playerUpdate() {

  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  //console.log("User Info  ",Botinfo)

  const context = useContext(offerContext)
  const { BotUpdate, UploadProfile, host } = context

  
  const navigate = useNavigate();
  const navigateToContacts = () => {
      // 👇️ navigate to /contacts 
      navigate('/transaction');
  };

  let [userInfo, SetuserInfo] = useState({
    userId: Botinfo.UserId,
    username: Botinfo.username,
    profileUrl: Botinfo.profileUrl,
    status: Botinfo.status,
    MobileNo:Botinfo.MobileNo,
    totalMatch:Botinfo.totalMatch,
    MainWallet:Botinfo.MainWallet,
    WinWallet:Botinfo.WinWallet,
    BonusWallet:Botinfo.BonusWallet,
    RegistrationDate:Botinfo.RegistrationDate,
    LastLogin:Botinfo.LastLogin,
    Status:Botinfo.status
  })

  useEffect(() => {
        
    const submitdata = async () => {
        SetuserInfo({
          userId: Botinfo.UserId,
          username: Botinfo.UserName,
          profileUrl: Botinfo.img,
          status: Botinfo.Status
        })
        
    }
    submitdata()
},[]);

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
        console.log("NAME :::::::::::::::::",value)
    SetuserInfo({
        ...userInfo,
        [name]: value,
    });

    console.log("handleChange ::::::::::::::::::::::",userInfo)

};

  const handleImage = async (e) => {
    console.log("Upload image ", e.target.files[0])
    const value = await UploadProfile(e.target.files[0])
    console.log("value ::::::::::::::::::",value)
    console.log("e.target.name ::::::::::::::::::",e.target.name)

    SetuserInfo({
      ...userInfo,
      [e.target.name]: value,
    });

    console.log("userInfo handleImage KKKKKKKKKKKKKKKKKKKKKKKKKKK", userInfo)

  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("userInfo ",userInfo)

    if(!/^[a-zA-Z\s]+$/.test(userInfo.username)){
      alert("Invalid User name. User name should only contain alphabetic characters and spaces.")
      return false
    }

    if(!/^[1-9]\d{9}$/.test(userInfo.MobileNo)){
      alert("Invalid mobile number. Mobile number should start with 1 and be exactly 10 digits long.")
      return false
    }

  

    let res = await BotUpdate(userInfo)

    console.log("REsponce ::::::::::::::::::::::",res)

    if(res.status == "ok"){
        navigateToContacts()
    }else{
        alert("Error Please enter")
    }
    console.log(userInfo);
};


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
        User Information
        </h3>
        <div className="mt-8">
          <form action="">
            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                User Name {Botinfo.UserName}
                </label>
           

              </div>
              <div className="flex flex-col gap-2" >
                <label
                  htmlFor="Images"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Profile Image
                </label>
                <img src={host + "/" + userInfo.profileUrl} className="h-10 w-10 overflow-hidden object-cover" alt="Robot Profile" />


                <input
                  placeholder="Select Profile"
                  type="file"
                  name="profileUrl"
                  id="profileUrl"
                  onChange={handleImage}
                  required
                />

              </div>
              <div className="flex flex-col gap-2">

                <label
                  htmlFor="Status"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Status
                </label>

                <label  htmlFor="Active"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
                  <input
                    type="radio"
                    value={true}
                    name="status"
                    checked={userInfo.status === true || userInfo.status === "true"}
                    onChange={OnChange}
                    required
                  />
                  Active
                </label>
                <label htmlFor="Inactive"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
                  <input
                    type="radio"
                    value={false}
                    name="status"
                    checked={userInfo.status === false || userInfo.status === "false" || userInfo.status === ""}
                    onChange={OnChange}
                  />
                     Inactive
                </label>
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


export default playerUpdate;