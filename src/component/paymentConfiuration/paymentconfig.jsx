
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function paymentconfig() {

  //==== payemnt Configragtion ==========================================================

  const Payin = ["PAYLOTUS", "FRENZOPAY", "NEOKRED"];
  const Payout = ["WOWPE", "FRENZOPAY", "NEOKRED"];



  const [paymentConfig, setPaymentConfig] = useState({
    payingateway: "",
    payoutgateway: "",
    depositbonus: 0,
    depositbonusinr: 0,
    minimumdepositinr: 0
  });
  const [paymentInOption, setPaymentInOption] = useState('');
  const [paymentOutOption, setPaymentOutOption] = useState('');


  //=================================================================================



  //==== payemnt Configragtion ==========================================================

  const [withdrawConfig, setWithdrawConfig] = useState({
    autopay: "",
    autopaymaxlimit: "",
    minimumwithdrawalamount: 0,
    dailywithdrawallimit: 0,
    dailytransactionlimit: 0
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedautopay, setIsCheckedautopay] = useState(false);
  //=================================================================================

  const context = useContext(offerContext)

  const { Getpaymentconfig, paymentconfigset, Getwithdrawconfig, withdrawconfigset } = context

  useEffect(() => {

    const submitdata = async () => {
      //============================= payemnt confiragtrion ============================
      let paymentgatewayData = await Getpaymentconfig()
      console.log("paymentgatewayData ::::::::::::::::::", paymentgatewayData)
      setPaymentConfig({
        payingateway: paymentgatewayData.payingateway,
        payoutgateway: paymentgatewayData.payoutgateway,
        depositbonus: paymentgatewayData.depositbonus,
        depositbonusinr: paymentgatewayData.depositbonusinr,
        minimumdepositinr: paymentgatewayData.minimumdepositinr
      })
      setPaymentInOption(paymentgatewayData.payingateway)
      setPaymentOutOption(paymentgatewayData.payoutgateway)

      //=================================================================================
      let WithdrawgatewayData = await Getwithdrawconfig()
      console.log("WithdrawgatewayData ::::::::::::::::::", WithdrawgatewayData)
      setWithdrawConfig({
        autopay: WithdrawgatewayData.autopay,
        autopaymaxlimit: WithdrawgatewayData.autopaymaxlimit,
        minimumwithdrawalamount: WithdrawgatewayData.minimumwithdrawalamount,
        dailywithdrawallimit: WithdrawgatewayData.dailywithdrawallimit,
        dailytransactionlimit: WithdrawgatewayData.dailytransactionlimit
      })
      setIsCheckedautopay(WithdrawgatewayData.autopay)
      //=================================================================================
    }
    submitdata()
  }, []);


  //===========================================================

  //======================= PaymentConfigChange =============================== Event 
  const handlePaymentConfigChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", name)
    console.log("value :::::::::::::::::", value)

    setPaymentConfig({
      ...paymentConfig,
      [name]: parseFloat(value),
    });

    console.log("paymentConfig ::::::::::::::::::::::", paymentConfig)

  };

  const handlePaymentinselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setPaymentInOption(value);
    setPaymentConfig({
      ...paymentConfig,
      ["payingateway"]: value,
    });
    console.log("paymentConfig :::::::::::::::::::::", paymentConfig)
  };

  const handlePaymentoutselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setPaymentOutOption(value);
    setPaymentConfig({
      ...paymentConfig,
      ["payoutgateway"]: value,
    });
    console.log("paymentConfig :::::::::::::::::::::", paymentConfig)
  };

  const handleSubmitPayment = async () => {
    let res = await paymentconfigset(paymentConfig)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(paymentConfig);
  };
  //===================================================================================
  //================================== withdraw config  ====================================

  const handlewithdrawConfigChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", name)
    console.log("value :::::::::::::::::", value)

    setWithdrawConfig({
      ...withdrawConfig,
      [name]: parseFloat(value),
    });
    console.log("withdrawConfig ::::::::::::::::::::::", withdrawConfig)
  };

  //const [isCheckedautopay, setIsCheckedautopay] = useState(false);



  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedautopay(!isCheckedautopay);
    setWithdrawConfig({
      ...withdrawConfig,
      [name]: !isCheckedautopay,
    });
  };

  const handleSubmitwithdraw = async () => {
    let res = await withdrawconfigset(withdrawConfig)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(withdrawConfig);
  };
  //=================================================================================

  //================================== referral Game Bonus ====================================


  //=================================================================================

  // payingateway: paymentgatewayData.payingateway,
  //       payoutgateway: paymentgatewayData.payoutgateway,
  //       depositbonus:paymentgatewayData.depositbonus,
  //       depositbonusinr:paymentgatewayData.depositbonusinr,
  //       minimumdepositinr:paymentgatewayData.minimumdepositinr

  return (
    <div className="mb-[24px] w-full">

      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Payment GateWay Confirgation</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center space-x-[79px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Pay-in Gateway</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">


                <select style={{ "width": "230px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={paymentInOption} onChange={handlePaymentinselect}>

                  {Payin.map((option, index) => (
                    <option name="payingateway" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>

              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[70px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Pay-out Gateway</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">



                <select style={{ "width": "230px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={paymentOutOption} onChange={handlePaymentoutselect}>

                  {Payout.map((option, index) => (
                    <option name="payoutgateway" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>



              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[78px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Deposit Bonus %</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="depositbonus"
                  name="depositbonus"
                  placeholder={paymentConfig.depositbonus}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlePaymentConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[17px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Deposit Bonus After(INR)</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="depositbonusinr"
                  name="depositbonusinr"
                  placeholder={paymentConfig.depositbonusinr}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlePaymentConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[30px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Minimum Deposit(INR)</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="minimumdepositinr"
                  name="minimumdepositinr"
                  placeholder={paymentConfig.minimumdepositinr}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlePaymentConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitPayment}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Payment Confirgation Sumbit
            </button>
          </div>

        </div>


      </div>


      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Withdraw Request configuration</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">
        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center space-x-[215px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Auto Play</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">

                <input
                  type="checkbox"
                  id="autopay"
                  name="autopay"
                  checked={isCheckedautopay}
                  onChange={handleCheckboxChange}
                />


              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[100px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Auto Pay Max Limit (INR)</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="autopaymaxlimit"
                  name="autopaymaxlimit"
                  placeholder={withdrawConfig.autopaymaxlimit}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlewithdrawConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[25px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Minimum Withdrawal Amount (INR)</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="minimumwithdrawalamount"
                  name="minimumwithdrawalamount"
                  placeholder={withdrawConfig.minimumwithdrawalamount}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlewithdrawConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[78px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Daily Withdrawal Limit (INR)</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="dailywithdrawallimit"
                  name="dailywithdrawallimit"
                  placeholder={withdrawConfig.dailywithdrawallimit}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlewithdrawConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[115px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Daily Transaction Limit</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="dailytransactionlimit"
                  name="dailytransactionlimit"
                  placeholder={withdrawConfig.dailytransactionlimit}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlewithdrawConfigChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitwithdraw}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Withdraw Sumbit
            </button>
          </div>

        </div>
      </div>


      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Wallte Balance - Payout</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">
        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
         

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[113px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">WoWPE</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="WoWPE"
                  name="WoWPE"
                  placeholder="15200"
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  readOnly={true} 
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[75px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">FRENZOPAY</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="FRENZOPAY"
                  name="FRENZOPAY"
                  placeholder="7845"
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  readOnly={true} 
                  />
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default paymentconfig;










