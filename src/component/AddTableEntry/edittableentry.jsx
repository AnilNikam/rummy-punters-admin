import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function pointTableUpdate() {

  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  const context = useContext(offerContext)
  const { TableEntryUpdate, host } = context

  console.log("Botinfo ",Botinfo)
  const navigate = useNavigate();
  const navigateToContacts = () => {
      // 👇️ navigate to /contacts 
      navigate('/TableEntry?gametype='+Botinfo.gamePlayType);
  };

  let [userInfo, SetuserInfo] = useState({
    betListId: Botinfo.id,
    gamePlayType: Botinfo.gamePlayType,
    tableName: "",
    entryFee:0,
    maxSeat:0,
    status:false,
    commission:0,
    expireIn:10,
    type:0,
    deal:0
  })

  useEffect(() => {
        
    const submitdata = async () => {
        SetuserInfo({
          betListId: Botinfo.id,
          gamePlayType: Botinfo.gamePlayType,
          tableName: Botinfo.tableName,
          entryFee:Botinfo.entryFee,
          maxSeat:Botinfo.maxSeat,
          status:Botinfo.status,
          commission:Botinfo.commission,
          expireIn:Botinfo.expireIn,
          type:Botinfo.type,
          deal:Botinfo.deal,
        })
        
    }
    submitdata()
},[]);

  const OnChange = (event) => {
    let { name, value } = event.target;

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



  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("userInfo ",userInfo)

    if(!/^[a-zA-Z\s]+$/.test(userInfo.tableName)){
      alert("Invalid Table name. Table name should only contain alphabetic characters and spaces.")
      return false
    }

    if(parseInt(userInfo.type) != 101 && parseInt(userInfo.type) != 201){
      alert("Invalid Table Type. Table Type should only contain 101 or 201.")
      return false
    }

    
    if(parseInt(userInfo.maxSeat) != 2 && parseInt(userInfo.maxSeat) != 6){
      alert("Invalid Max Seat Must be 2 or 6.")
      return false
    }

    let res = await TableEntryUpdate(userInfo)

    console.log("responce ::::::::::::::::::::::",res)

    if(res.status == 1){
        navigateToContacts()
    }else{
        alert(res.message)
    }
    console.log(userInfo);
};


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
        Table Entry Updation
        </h3>
        <div className="mt-8">
        <form action="">
        <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
          

          <div className="flex flex-col gap-2">
            <label
              htmlFor="Table Name"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Table Name
            </label>
            <input
              type="text"
              id="tableName"
              placeholder={userInfo.tableName}
              value={userInfo.tableName}
              name="tableName"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="Table Name"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Commission
            </label>
            <input
              type="text"
              id="commission"
              placeholder={userInfo.commission}
              value={userInfo.commission}
              name="commission"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div>

          {Botinfo.tabletype != "pointrummy" && Botinfo.tabletype != "poolrummy" ? <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Deal
            </label>
            <input
              type="text"
              id="deal"
              placeholder={userInfo.deal}
              value={userInfo.deal}
              name="deal"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div> : ""}

          {Botinfo.tabletype != "pointrummy" && Botinfo.tabletype != "dealrummy" ? <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Type
            </label>
            <input
              type="text"
              id="type"
              placeholder={userInfo.type}
              value={userInfo.type}
              name="type"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div> : "" }

          <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Entry Fee
            </label>
            <input
              type="text"
              id="entryFee"
              placeholder={userInfo.entryFee}
              value={userInfo.entryFee}
              name="entryFee"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div>


          <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Max Seat
            </label>
            <input
              type="text"
              id="maxSeat"
              placeholder={userInfo.maxSeat}
              value={userInfo.maxSeat}
              name="maxSeat"
              className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="Title"
              className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
            >
            Table Status
            </label>
            <label  htmlFor="Active"
            className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
              <input
                type="radio"
                value="Active"
                name="status"
                checked={userInfo.status == "Active"}
                onChange={OnChange}
                required
              />
              Active
            </label>
            <label htmlFor="Inactive"
            className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
              <input
                type="radio"
                value="DeActive"
                name="status"
                checked={userInfo.status == "DeActive"}
                onChange={OnChange}
                required
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
            Edit Table
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
}


export default pointTableUpdate;