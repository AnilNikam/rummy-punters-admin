import PlayerUpdate from "../../component/PlayerUpdate";
import UserInfoCard from "../../component/PlayerUpdate/userinfocard";
import HistoryTable from "../../component/PlayerUpdate/playerhistory";
import TransactionData from "../../component/PlayerUpdate/Transaction/playertransaction";
import DepositData from "../../component/PlayerUpdate/Deposit/playerdeposit";
import KycuserInfo from "../../component/PlayerUpdate/kycuserinfocard";
import BankuserInfo from "../../component/PlayerUpdate/Bankuserinfocard";
import DeviceuserInfo from "../../component/PlayerUpdate/deviceuserinfocard";
import LocationuserInfoCard from "../../component/PlayerUpdate/locationuserinfocard";



import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import React, { useState, useContext, useEffect } from 'react';
function playerUpdateinfo() {

    const [state, setState] = useState("kycdetails");

  return (

    <>
    

    <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      {/* write your code here */}

      

      <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="mb-6 2xl:mb-0 2xl:flex-1">

      <div className="custom-tabs-wrapper">
      <Tabs
      id="controlled-tabs"
      activeKey={state}
      onSelect={(key) => setState(key)}
      className="custom-tabs-header"
    >
      <Tab eventKey="kycdetails" title="KYC Details">
        {/* Content for Home tab */}
        <div> <KycuserInfo/> 
        </div>
      </Tab>
      <Tab eventKey="bankdetails" title="Bank Details">
        {/* Content for Profile tab */}
        <div>  
        <BankuserInfo/> 
        </div>
      </Tab>
      <Tab eventKey="gamedetails" title="Game Details">
        {/* Content for Contact tab */}
        <div><HistoryTable gameName="Rummy"/> 
          </div>
      </Tab>
      <Tab eventKey="payment" title="Payments">
        {/* Content for Contact tab */}
        <div> 
        <TransactionData gameName="Withdrawal"/>     
        <DepositData gameName="Deposit"/> 
        <DepositData gameName="Referral Bonus"/>
              </div>
      </Tab>
      <Tab eventKey="deviceinfo" title="Device Info">
        {/* Content for Contact tab */}
        <div> <DeviceuserInfo/></div>
      </Tab>
      <Tab eventKey="locationinfo" title="Location Info">
        {/* Content for Contact tab */}
        <div> <LocationuserInfoCard /></div>
      </Tab>
    </Tabs></div>

         
          
          
          
       
        </section>
        <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
          <UserInfoCard />
        </section>
      </div>
    </main>
    </>
  );
}

export default playerUpdateinfo;

// <section className="2xl:flex-1 w-full">
//           <Wallet />
//           <TeamChat />
//         </section>