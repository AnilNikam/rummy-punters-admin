import React, { useState, useContext, useEffect } from 'react';
import ProtoTypes from "prop-types";
import CustomerInfo from "./PlayerInfo";
import offerContext from '../../context/offerContext';
import { useNavigate } from 'react-router-dom';

function PlayerTab({ }) {
  //-------------------------------------------------------------------------------------------------------
  const [active, setActive] = useState(false);
  const [pageSize, setPageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const Dropdown = (item) => {
    setPageSize(item)
    setActive(!active)
  }
  //------------------------------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const navigateToUserRegister = () => {
    navigate('/playeradd');
  };

  let [userData, setUserData] = useState([]);
  const context = useContext(offerContext)
  const { StateList } = context

  useEffect(() => {
    const submitdata = async () => {
      setUserData(await StateList())
    }
    submitdata()
  }, []);




  const handleSort = (key) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...userData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setUserData(sorted);
    setSortDirection(direction);
  };


  return (
    <>
      
      <div className="table-content w-full overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-bgray-300 dark:border-darkblack-400">
              <td className="w-[250px] px-6 py-5 xl:px-0">
                <div className="flex w-full items-center space-x-2.9">
                  <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                    State Name
                  </span>

                </div>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('active')}>
                <div className="flex w-full items-center space-x-2.5">
                  <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                    Action
                  </span>
                  <span>
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.332 1.31567V13.3157"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.66602 13.3157V1.31567"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </td>


            </tr>
            {userData?.map((user, index) =>
              pageSize
                ? index + 1 <= pageSize && (
                  <CustomerInfo
                    key={user._id}
                    Id={user._id}
                    statename={user.statename}
                    active={user.active}


                  />
                )
                : index < 3 && (
                  <CustomerInfo
                    key={user._id}
                    Id={user._id}
                    statename={user.statename}
                    active={user.active}

                  />
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default PlayerTab;
