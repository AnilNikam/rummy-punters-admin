import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
function changepwd() {

  const context = useContext(offerContext)

  const { Chnageidpwd,Chnageidprofile, LogoutClick } = context

  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');


  

  const [name, setName] = useState(cookies.get('name'));
  const [newEmail, setNewEmail] = useState(cookies.get('email'));

  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/signin');
  };


  const ChnagePWD = async () => {
    console.log("oldPwd ", oldPwd)
    if (oldPwd && confirmPwd == newPwd) {
      const newBanner = {
        oldPwd: oldPwd,
        newPwd: newPwd,
        email:cookies.get('email')
      };

      let res = await Chnageidpwd(newBanner)
      console.log("REsponce ::::::::::::::::::::::", res)

      if (res.status == 1) {
        setOldPwd('');
        setNewPwd('');
        alert(res.message)
        LogoutClick()
        navigateToContacts()

      } else {
        alert(res.message)
      }
    }else{
      alert("Your password and confirmation password do not match.")
    }
  };

  const UpdateProfile = async () => {

    console.log("Update Profile :::::::::::::")
    console.log("New Name :::", name)
    console.log("New newEmail :::", newEmail)

    if (name && newEmail) {
      const newBanner = {
        name: name,
        newEmail: newEmail,
        email:cookies.get('email')
      };

      let res = await Chnageidprofile(newBanner)
      console.log("REsponce ::::::::::::::::::::::", res)

      if (res.status == 1) {
        setName("")
        setNewEmail("")
        alert(res.message)
        LogoutClick()
        navigateToContacts()

      } else {
        alert(res.message)
      }
    }else{
      alert("Enter Your Name or Email.")
    }
  };



  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Profile Update
        </h3>
        <div className="mt-8">

          <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Title"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="link"
                placeholder={cookies.get('name')}
                name="link"
                className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Title"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
              >
                Email Id
              </label>
              <input
                type="text"
                id="Title"
                placeholder={cookies.get('email')}
                name="Title"
                className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>


          </div>
          <div className="flex justify-start">
            <button
              aria-label="none"
              className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
              onClick={UpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Change Admin Password
        </h3>
        <div className="mt-8">

          <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Title"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
              >
                Old Password
              </label>
              <input
                type="text"
                id="Title"
                placeholder="Old password"
                name="Title"
                className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                onChange={(e) => setOldPwd(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">

            </div>

            <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
              New Password
            </label>
            <input
              type="text"
              id="link"
              placeholder="New password"
              name="link"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={(e) => setNewPwd(e.target.value)}
            />
          </div>
          
            <div className="flex flex-col gap-2">

            </div>

            <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="link"
              placeholder="Confirm Password"
              name="link"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
          </div>
           

          </div>
          <div className="flex justify-start">
            <button
              aria-label="none"
              className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
              onClick={ChnagePWD}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}


export default changepwd;