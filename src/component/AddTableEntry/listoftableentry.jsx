import ProtoTypes from "prop-types";
import Pagination from "../Pagination";
import Search from "../forms/Search";
import UserTab from "./UserTab";
import PoolUserTab from "./PoolUserTab";
import PointUserTab from "./PointUserTab";


function ListNotice({ pageSize,gameType }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
      
        {gameType == "dealrummy" ? <UserTab pageSize={pageSize} gameType={gameType}/> : " " }
        {gameType == "pointrummy" ? <PointUserTab pageSize={pageSize} gameType={gameType}/> : " " }
        {gameType == "poolrummy" ? <PoolUserTab pageSize={pageSize} gameType={gameType}/> : " " }

    
      </div>
    </div>
  );
}

ListNotice.propTypes = {
  pageSize: ProtoTypes.number,
};

export default ListNotice;


// <div className="flex h-[56px] w-full space-x-4">
         
          
// </div>