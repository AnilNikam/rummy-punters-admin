import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import ALLOWED from "../../assets/images/allow.png";
import BLOCKED from "../../assets/images/block.png";
import offerContext from '../../context/offerContext';
function PlayerInfo({ Id, statename, active }) {
  console.log("statename ::::::::::::::::::::::::::::::::::",statename )

  console.log("acctive ::::::::::::::::::::::::::::::::::",active )

  const context = useContext(offerContext)
  const { StateListAction } = context

  const navigate = useNavigate();
  const navigateToContacts = async ( Id, active) => {
   
    let res = await StateListAction({Id, active})

    console.log("REsponce ::::::::::::::::::::::",res)

    if(res.falgs){
      window.location.reload();
 
    }else{
        alert("Error Please enter")
    }
    console.log(res);

  }

  return (
    <tr className="border-b border-bgray-300 dark:border-darkblack-400">

      
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <div className="flex w-full items-center space-x-2.5">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {statename}
          </p>
        </div>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white" >
          {
            
            (active == true)?
            <button styles={{
              "margin": "1px",
              "background-color": "red",
              "color": "red",
              "border": "none",
              "padding": "5px 10px",
              "cursor": "pointer",
              "border-radius": "4px"
            }} onClick={() => navigateToContacts(Id,false)} >
             
              <img style={{  }} src={BLOCKED} />
            </button> : <button styles={{
              "margin": "1px",
              "background-color": "green",
              "color": "green",
              "border": "none",
              "padding": "5px 10px",
              "cursor": "pointer",
              "border-radius": "4px"
            }} onClick={() => navigateToContacts(Id,true)} >
              
              <img style={{  }} src={ALLOWED} />

            </button>
            
          }
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
