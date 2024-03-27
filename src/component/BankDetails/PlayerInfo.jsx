import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ UserId, name, email, phone, BeneficiaryName, amountNumber, IFSC, createdAt,paymentStatus }) {

  const context = useContext(offerContext)
  const { PlayerData } = context


  const navigate = useNavigate();
  const navigateToContacts = async (id) => {

    var PlayerDataInfo = await PlayerData(id)
    console.log("PlayerDataInfo", PlayerDataInfo)
    if (PlayerDataInfo.userInfo != undefined) {
      navigate('/playeredit', {
        state: {
          UserId: PlayerDataInfo.userInfo._id,
          UserName: PlayerDataInfo.userInfo.username,
          MobileNo: PlayerDataInfo.userInfo.mobileNumber,
          totalMatch: PlayerDataInfo.userInfo.counters.totalMatch.toFixed(2),
          MainWallet: PlayerDataInfo.userInfo.chips.toFixed(2),
          WinWallet: PlayerDataInfo.userInfo.winningChips.toFixed(2),
          BonusWallet: PlayerDataInfo.userInfo.chips.toFixed(2),
          RegistrationDate: PlayerDataInfo.userInfo.createdAt,
          LastLogin: PlayerDataInfo.userInfo.lastLoginDate,
          status: PlayerDataInfo.userInfo.status ? 'Blocked' : 'Active',
          profileUrl: PlayerDataInfo.userInfo.profileUrl,
          email: PlayerDataInfo.userInfo.email,
          uniqueId: PlayerDataInfo.userInfo.uniqueId,
          avatar: PlayerDataInfo.userInfo.avatar
        }
      });
    } else {
      alert("user not exist ...!!")
    }
  }

  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">

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
        }} onClick={() => navigateToContacts(UserId)} >

          {UserId}
          </button>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {name}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {email}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {phone}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {BeneficiaryName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {amountNumber}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {IFSC}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {createdAt}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {paymentStatus}
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
