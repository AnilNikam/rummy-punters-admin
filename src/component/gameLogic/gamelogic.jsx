
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function gameLogic() {

  //==== WelcomeBonus ==========================================================

  const [welcomBonus, setWelcomBonus] = useState({
    welcomebonus: true,
    welcomebonusamount: 0,
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedwelcome, setIsCheckedwelcome] = useState(false);
  //=================================================================================

  //==== referral bonus  referral Deposit bonus amount ==========================================================

  const [referralBonus, setReferralBonus] = useState({
    referralbonus: true,
    referralbonusrate: 0,
    referralbonusamount: 0,
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedwreferral, setIsCheckedreferral] = useState(false);
  //=================================================================================


  //==== referral game  bonus amount ==========================================================

  const [referralgameBonus, setReferralgameBonus] = useState({
    referralgamebonus: true,
    referralgamebonusrate: 0,
    referralgamebonusamount: 0,
    platformfee: 0
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedwreferralgame, setIsCheckedreferralgame] = useState(false);
  //=================================================================================




  const context = useContext(offerContext)

  const { GetWelComeBonus, WelComeBonusset, GetreferralBonus, referralBonusset, GetreferralgameBonus, referralgameBonusset } = context

  useEffect(() => {

    const submitdata = async () => {
      //============================= welcome ============================
      let welcomeBonusData = await GetWelComeBonus()
      console.log("welcomeBonusData ::::::::::::::::::", welcomeBonusData)
      setWelcomBonus({
        welcomebonus: welcomeBonusData.welcomebonus,
        welcomebonusamount: welcomeBonusData.welcomebonusamount,
      })
      setIsCheckedwelcome(welcomeBonusData.welcomebonus)
      //==================================================================

      let referralBonusData = await GetreferralBonus()
      console.log("referralBonusData ::::::::::::::::::", referralBonusData)
      setReferralBonus({
        referralbonus: referralBonusData.referralbonus,
        referralbonusrate: referralBonusData.referralbonusrate,
        referralbonusamount: referralBonusData.referralbonusamount,
      })
      setIsCheckedreferral(referralBonusData.referralbonus)

      //======================================


      let referralgameBonusData = await GetreferralgameBonus()
      console.log("referralBonusData ::::::::::::::::::", referralgameBonusData)
      setReferralgameBonus({
        referralgamebonus: referralgameBonusData.referralgamebonus,
        referralgamebonusrate: referralgameBonusData.referralgamebonusrate,
        referralgamebonusamount: referralgameBonusData.referralgamebonusamount,
        platformfee: referralgameBonusData.platformfee,
      })
      setIsCheckedreferralgame(referralgameBonusData.referralgamebonus)

      //======================================

    }
    submitdata()
  }, []);


  //===========================================================

  //======================= wel Come Bonus =============================== Event 
  const handleBonusChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", value)
    setWelcomBonus({
      ...welcomBonus,
      [name]: parseFloat(value),
    });

    console.log("handleChange ::::::::::::::::::::::", welcomBonus)

  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedwelcome(!isCheckedwelcome);
    setWelcomBonus({
      ...welcomBonus,
      [name]: !isCheckedwelcome,
    });
  };

  const handleSubmitwelcome = async () => {
    let res = await WelComeBonusset(welcomBonus)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(welcomBonus);
  };
  //===================================================================================
  //================================== referral depostie  ====================================

  const handlereferralChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", value)
    setReferralBonus({
      ...referralBonus,
      [name]: parseFloat(value),
    });

    console.log("referralBonus handleChange ::::::::::::::::::::::", referralBonus)

  };

  const handlereferralCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedreferral(!isCheckedwreferral);
    setReferralBonus({
      ...referralBonus,
      [name]: !isCheckedwreferral,
    });
  };

  const handlereferralSubmitwelcome = async () => {
    let res = await referralBonusset(referralBonus)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(welcomBonus);
  };

  //=================================================================================

  //================================== referral Game Bonus ====================================

  const handlereferralgameChange = (event) => {
    const { name, value } = event.target;
    console.log("value :::::::::::::::::", value)
    console.log("NAME :::::::::::::::::", name)

    setReferralgameBonus({
      ...referralgameBonus,
      [name]: parseFloat(value),
    });

    console.log("handlereferralgameChange handleChange ::::::::::::::::::::::", referralgameBonus)

  };

  const handlereferralgameCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedreferralgame(!isCheckedwreferralgame);
    setReferralgameBonus({
      ...referralgameBonus,
      [name]: !isCheckedwreferralgame,
    });
  };

  const handlereferralgameSubmitwelcome = async () => {
    let res = await referralgameBonusset(referralgameBonus)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(referralgameBonus);
  };

  //=================================================================================


  return (
    <div className="mb-[24px] w-full">

      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Welcome Bonus</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">
        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[70px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">WelCome Bonus</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="checkbox"
                  id="welcomebonus"
                  name="welcomebonus"
                  checked={isCheckedwelcome}
                  onChange={handleCheckboxChange}
                />
              </span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">WelCome Bonus Amount</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="welcomebonusamount"
                  name="welcomebonusamount"
                  placeholder={welcomBonus.welcomebonusamount}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handleBonusChange}
                />
              </span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitwelcome}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              WelCome Bonus Sumbit
            </button>
          </div>
        </div>
      </div>
      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral bonus (First deposit)</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[90px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral deposit Bonus</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="checkbox"
                  id="referralbonus"
                  name="referralbonus"
                  checked={isCheckedwreferral}
                  onChange={handlereferralCheckboxChange}
                />
              </span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[70px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral deposit Bonus %</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="referralbonusrate"
                  name="referralbonusrate"
                  placeholder={referralBonus.referralbonusrate}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralChange}
                />
              </span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral deposit Bonus Max Limit</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="referralbonusamount"
                  name="referralbonusamount"
                  placeholder={referralBonus.referralbonusamount}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralChange}
                />
              </span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <button onClick={handlereferralSubmitwelcome}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Referral (First deposit) Sumbit
            </button>
          </div>
        </div>
      </div>


      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral bonus(game)</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[100px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral Game Bonus</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="checkbox"
                  id="referralgamebonusgame"
                  name="referralgamebonusgame"
                  checked={isCheckedwreferralgame}
                  onChange={handlereferralgameCheckboxChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[80px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral Game Bonus %</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="referralgamebonusrate"
                  name="referralgamebonusrate"
                  placeholder={referralgameBonus.referralgamebonusrate}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralgameChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[20px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral Game Bonus Max Limit</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="referralgamebonusamount"
                  name="referralgamebonusamount"
                  placeholder={referralgameBonus.referralgamebonusamount}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralgameChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[140px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Platform fee %</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="platformfee"
                  name="platformfee"
                  placeholder={referralgameBonus.platformfee}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralgameChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handlereferralgameSubmitwelcome}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Referral (Game) Bonus Sumbit
            </button>
          </div>

        </div>



      </div>

    </div>
  );
}

export default gameLogic;










