import ProtoTypes from "prop-types";
import Pagination from "../Pagination";

import Search from "../forms/Search";
import PlayerTab from "./PlayerTab";
function KycManagement({ status }) {
  console.log("status KycManagement ",status)
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
      <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200"> 
        {status == "Pendding"?"KYC - Pending Profiles":(status == "Rejected")?"KYC - Rejected Profiles":"KYC - Approved Profiles"}
      </h3>

        <PlayerTab status={status} />
      </div>
    </div>
  );
}

KycManagement.propTypes = {
  pageSize: ProtoTypes.number,
};

export default KycManagement;
