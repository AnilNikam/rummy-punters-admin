import GreenBtn from "../button/AddMony";

import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import offerContext from '../../context/offerContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function kycuserinfo() {


  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  //console.log("kycuserinfocard User Info  ", Botinfo)

  const context = useContext(offerContext)
  const { host, PlayerData } = context


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/transaction');
  };

  let [userInfo, SetuserInfo] = useState({})
  let [userPankycInfo, SetkyPancuserInfo] = useState({})
  let [userAadharkycInfo, SetkyAadharcuserInfo] = useState({})



  useEffect(() => {

    const submitdata = async () => {


      let resData = await PlayerData(Botinfo.UserId)
      
      console.log("resData ::::::::::::::::::",resData)

      await SetuserInfo(resData.userInfo)
      await SetkyPancuserInfo(resData.PanOKYCData)
      await SetkyAadharcuserInfo(resData.UserOKYCData)



    }

    submitdata()

  }, [Botinfo.UserId]);

  let avatarImg = (userInfo && userInfo.avatar != undefined) ? host + "/upload/avatar/" + userInfo.avatar + ".jpg" : ""

  const [imageSrc, setImageSrc] = useState(avatarImg);

  const handleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageSrc('/src/assets/images/avatar/profile-52x52.png');
  };

  const [imagePanSrc, setImagePanSrc] = useState(avatarImg);

  const panhandleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImagePanSrc('/src/assets/images/dashboard/dashboard2.png');
  };
  
  const [imageAdharfrontSrc, setImageAdharfrontSrc] = useState(avatarImg);

  const adharfronthandleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageAdharfrontSrc('/src/assets/images/dashboard/dashboard2.png');
  };


  const [imageAdharbackSrc, setImageAdharbackSrc] = useState(avatarImg);

  const adharbackhandleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageAdharbackSrc('/src/assets/images/dashboard/dashboard2.png');
  };


  return (
    <>
     

      
      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              User Kyc Information
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imageSrc} alt="card" onError={handleImageError} />
              </div>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Name :- {userInfo.name != undefined ? userInfo.name : ""}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Eamil :- {userInfo.email}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Gender :- {userAadharkycInfo.gender == "M" ? "MALE" : "FEMALE"}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Mobile Number :- {userInfo.mobileNumber}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              DOB :- {userAadharkycInfo.DOB}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              State :- {userInfo.location}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              PinCode :- {userAadharkycInfo.pincode}
            </p>
          </div>


        </div>
      </div>

      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              Pan Kyc Information
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imagePanSrc} alt="card" onError={panhandleImageError} />
              </div>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Name :- {userPankycInfo.pancardname}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Pan No :- {userPankycInfo.pancard}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Father's Name :- {userPankycInfo.full_name} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              DOB :- {userPankycInfo.DOB} 
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              Aadhar Kyc Information
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imageAdharfrontSrc} alt="card" onError={adharfronthandleImageError} />

              </div>

            </div>
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imageAdharbackSrc} alt="card" onError={adharbackhandleImageError} />

              </div>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Digilocaker Verified :- {userAadharkycInfo.verified == true ? "YES": "NO"}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Name :-  {userAadharkycInfo.full_name}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              DOB :-  {userAadharkycInfo.DOB}
            </p>
          </div>

          <div className="flex h-[100px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Address  :-  {userAadharkycInfo.userInfo}
            </p>
          </div>

        </div>
      </div>


      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              Kyc Status
            </h3>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Status :- "Status"
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Hyperverge Feedback :- "Hyperverge"
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Admin Feedback :- "Admnin Remakrk" 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Updated On  :- "10-10-2023"
            </p>
          </div>

        </div>
      </div>

    </>
  );
}

export default kycuserinfo;


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
