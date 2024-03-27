
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function botconfig() {

  //==== payemnt Configragtion ==========================================================

  const BotmodeList = ["No Bots", "Only Bot join with Player", "Player Join with Player or Bot"];
  const Botdifficulty = ["NORMAL", "MEDIUM", "SMART"];



  const [botConfig, setBotConfig] = useState({
    botversion: 0,
    botmode: "",
    botdifficulty: "",
  });
  const [botModeOption, setBotModeOption] = useState('');
  const [botDiffOption, setBotDiffOption] = useState('');


  //=================================================================================



  const context = useContext(offerContext)

  const { Getbotconfig, Botconfigset } = context

  useEffect(() => {

    const submitdata = async () => {
      //============================= Bot confiragtrion ============================
      let botData = await Getbotconfig()
      console.log("botData ::::::::::::::::::", botData)
      setBotConfig({
        botversion: botData.botversion,
        botmode: botData.botmode,
        botdifficulty: botData.botdifficulty,
      })
      setBotModeOption(botData.botmode)
      setBotDiffOption(botData.botdifficulty)

      //=================================================================================
    }
    submitdata()
  }, []);


  //===========================================================

  //======================= PaymentConfigChange =============================== Event 
  const handleBotConfigChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", name)
    console.log("value :::::::::::::::::", value)

    setBotConfig({
      ...botConfig,
      [name]: parseFloat(value),
    });

    console.log("botConfig ::::::::::::::::::::::", botConfig)

  };

  const handleBotModeselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setBotModeOption(value);
    setBotConfig({
      ...botConfig,
      ["botmode"]: value,
    });
    console.log("botConfig :::::::::::::::::::::", botConfig)
  };

  const handleBotDifficultyselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setBotDiffOption(value);
    setBotConfig({
      ...botConfig,
      ["botdifficulty"]: value,
    });
    console.log("botConfig :::::::::::::::::::::", botConfig)
  };

  const handleSubmitBot = async () => {
    let res = await Botconfigset(botConfig)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(botConfig);
  };
  //===================================================================================



  return (
    <div className="mb-[24px] w-full">

      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Bot Confirgation</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[70px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Bot Version</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="botversion"
                  name="botversion"
                  placeholder={botConfig.botversion}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  style={{ "width": "290px" }}
                  onChange={handleBotConfigChange}
                />
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center space-x-[79px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Bot Mode</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">


                <select style={{ "width": "290px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={botModeOption} onChange={handleBotModeselect}>

                  {BotmodeList.map((option, index) => (
                    <option name="payingateway" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>

              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[56px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Bot Difficulty</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <select style={{ "width": "290px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={botDiffOption} onChange={handleBotDifficultyselect}>

                  {Botdifficulty.map((option, index) => (
                    <option name="payoutgateway" key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitBot}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Bot Confirgation Sumbit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default botconfig;










