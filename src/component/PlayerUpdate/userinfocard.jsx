import GreenBtn from "../button/AddMony";

import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function userInfo() {


  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  //console.log("User Info  ", Botinfo)

  const context = useContext(offerContext)
  const { AddMoney, DeductMoney, host, PlayerData } = context


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/transaction');
  };

  let [userInfo, SetuserInfo] = useState({})
  let [userkycInfo, SetkycuserInfo] = useState({})


  useEffect(() => {

    const submitdata = async () => {

      // SetuserInfo({
      //   userId: Botinfo.UserId,
      //   UserName: Botinfo.UserName,
      //   profileUrl: Botinfo.img,
      //   status: Botinfo.status,
      //   MobileNo: Botinfo.MobileNo,
      //   totalMatch: Botinfo.totalMatch,
      //   MainWallet: Botinfo.MainWallet,
      //   WinWallet: Botinfo.WinWallet,
      //   BonusWallet: Botinfo.BonusWallet,
      //   RegistrationDate: Botinfo.RegistrationDate,
      //   LastLogin: Botinfo.LastLogin,
      //   Status: Botinfo.status,
      //   email: Botinfo.email,
      //   uniqueId: Botinfo.uniqueId,
      // })
      let resData = await PlayerData(Botinfo.UserId)

      await SetuserInfo(resData.userInfo)
      await SetkycuserInfo(resData.UserOKYCData)


    }

    submitdata()
    //console.log("User IG:::::::::::::::::", userInfo)

  }, [Botinfo.UserId]);

  const [amount, setAmount] = useState(0);

  const handleAmount = async (event) => {
    const { name, value } = event.target;
    await setAmount(value)

    console.log("amount", amount)

  }

  const SaveChange = async () => {
    console.log("amount ", amount)

    let res = await AddMoney({ money: amount, type: "Deposit", userId: Botinfo.UserId })

    if (res.status == "ok") {

      alert("Successfully Added...!!")
    } else {
      alert("Error Please enter")
    }

    setAmount(0)

  }



  const SaveChangeDeduct = async () => {
    console.log("amount ", amount)

    let res = await DeductMoney({ money: amount, type: "Deduct", userId: Botinfo.UserId })

    if (res.status == "ok") {

      alert("Successfully Deduct...!!")
    } else {
      alert("Error Please enter")
    }

    setAmount(0)

  }

  const [imageSrc, setImageSrc] = useState(host + "/upload/avatar/"+userInfo.avatar+".jpg");

  const handleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageSrc('/src/assets/images/avatar/profile-52x52.png');
  };

  return (
    <>
      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
            User Information
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imageSrc} alt="card" onError={handleImageError}/>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            User Name :- {userInfo.name != undefined?userInfo.name :""}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              User Name :- {userInfo.username}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Eamil :- {userInfo.email}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            User Id :- {userInfo.uniqueId}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Mobile Number :- {userInfo.mobileNumber}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Status :- {userInfo.status == "" || userInfo.status == "false" || userInfo.status == false ? "DeActive" : "Active"}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Main Wallet :- {userInfo.chips}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Win Wallet :- {userInfo.winningChips}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Bonus Wallet :- {userInfo.bonusChips}
            </p>
          </div>
          <div className="flex h-[150px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Aadhar_card Details
            </p>
          
            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Aadhar Card :- {userkycInfo.adharcard}
              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Verified :- {userkycInfo.verified ? "Verified" : "UnVerified"}

              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Address :- {userkycInfo.userInfo}

              </p>

            </div>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              PanCard :- {"PAN CARD"}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default userInfo;


// <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
//             <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
//               Enter amount deposit
//             </p>
//             <div className="flex h-[35px] w-full items-center justify-between">
//               <span className="text-2xl font-bold text-bgray-900 dark:text-white">
//               ₹
//               </span>
//               <label className="w-full">
//                 <input
//                   type="text" onChange={handleAmount}
//                   className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
//                 />
//               </label>
//             </div>
//           </div>


//           <button aria-label="none" onClick={SaveChange}
//             className="mt-7 bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Add Money</button>



//           <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
//             <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
//               Enter amount Deduct
//             </p>
//             <div className="flex h-[35px] w-full items-center justify-between">
//               <span className="text-2xl font-bold text-bgray-900 dark:text-white">
//               ₹
//               </span>
//               <label className="w-full">
//                 <input
//                   type="text" onChange={handleAmount}
//                   className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
//                 />
//               </label>
//              </div>
//           </div>

//           <button aria-label="none" onClick={SaveChangeDeduct}
//           className="mt-7 bg-red-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Deduct Money</button>
