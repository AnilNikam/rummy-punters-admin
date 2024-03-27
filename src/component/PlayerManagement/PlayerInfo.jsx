import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ UserId, UserName, MobileNo, totalMatch, MainWallet, WinWallet, BonusWallet, RegistrationDate, LastLogin, status, profileUrl, email, uniqueId, avatar }) {

  console.log("avatar :::::::::::::::::::::::::::::", avatar)

  const navigate = useNavigate();
  const navigateToContacts = (UserId, UserName, MobileNo, totalMatch, MainWallet, WinWallet, BonusWallet, RegistrationDate, LastLogin, status, profileUrl, email, uniqueId, avatar) => {

    navigate('/playeredit', { state: { UserId, UserName, MobileNo, totalMatch, MainWallet, WinWallet, BonusWallet, RegistrationDate, LastLogin, status, profileUrl, email, uniqueId, avatar } });
  }

  const context = useContext(offerContext)
  const { host } = context

  const [imageSrc, setImageSrc] = useState(host + "/upload/avatar/" + avatar + ".jpg");

  const handleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageSrc('/src/assets/images/avatar/profile-52x52.png');
  };
  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">

      <td className="w-[65px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img src={imageSrc} alt="Profile" onError={handleImageError} className="h-full w-full object-cover" />
          </div>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContacts(UserId, UserName, MobileNo, totalMatch, MainWallet, WinWallet, BonusWallet, RegistrationDate, LastLogin, status, profileUrl, email, uniqueId, avatar)} >

            {UserId}
          </button>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {UserName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {MobileNo}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {totalMatch}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{MainWallet}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{WinWallet}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{BonusWallet}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {RegistrationDate}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {LastLogin}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {status}
        </p>
      </td>

    </tr>
  );
}

// <button styles={{
//   "margin": "1px",
//   "background-color": "white",
//   "color": "white",
//   "border": "none",
//   "padding": "5px 10px",
//   "cursor": "pointer",
//   "border-radius": "4px"
// }} onClick={() => DeleteUser(UserId)} >
//   <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={trash} />
// </button>

// PlayerInfo.propTypes = {
//   UserId:ProtoTypes.string,
//   UserName:ProtoTypes.string,
//   MobileNo:ProtoTypes.string,
//   GamePlay:ProtoTypes.Number,
//   MainWallet:ProtoTypes.Number,
//   RegistrationDate:ProtoTypes.string,
//   LastLogin:ProtoTypes.string,
//   status:ProtoTypes.string,
//   Status:ProtoTypes.string
// };

export default PlayerInfo;
