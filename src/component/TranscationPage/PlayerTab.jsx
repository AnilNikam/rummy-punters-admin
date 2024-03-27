import React, { useState, useContext, useEffect } from 'react';
import ProtoTypes from "prop-types";
import CustomerInfo from "./PlayerInfo";
import offerContext from '../../context/offerContext';
import { useNavigate } from 'react-router-dom';

function PlayerTab({ }) {
  //-------------------------------------------------------------------------------------------------------
  const [active, setActive] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [typeofTransaction, setTypeofTransaction] = useState('');

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
  const { TrancationData } = context

  useEffect(() => {
    const submitdata = async () => {
      setUserData(await TrancationData())
    }
    submitdata()
  }, []);

  //--------------------------- Paggeation and No Of Pages ------------------------------------
  // Filter the user data based on date range and search term
  const filteredUsers = userData.filter((user) => {
    console.log("dddd", user)
    const registrationDate = new Date(user.createdAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    const typeoftrancation = typeofTransaction == "Bonus" ? ["SingUp Bonus",
      "Deal Playing Entry Deduct bonus", "Pool Playing Entry Deduct bonus",
      "Point Playing Entry Deduct bonus",
      "Deposit Bonus",
      "Reffral Bonus"
    ] : typeofTransaction == "Game" ? ["Game Win",
      "Deal Playing Entry Deposit",
      "Pool Playing Entry Deduct bonus",
      "Point Playing Entry Deposit"
    ] : typeofTransaction == "Payment" ? ["PayIn",
      "PayOut"
    ] : typeofTransaction == "Referral" ? ["Reffral Bonus"
    ] : null;

    console.log("typeoftrancation ", typeoftrancation)

    return (
      (!from || registrationDate >= from) &&
      (!to || registrationDate <= to) &&
      (!typeoftrancation || typeoftrancation.indexOf(user.transTypeText)) &&
      (searchTerm === '' ||
      (user.OrderId  != undefined && user.OrderId.includes(searchTerm)) ||
        ( user.uniqueId != undefined && user.uniqueId.includes(searchTerm)))
    );
  });

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // Filter the user data for the current page
  const usersOnCurrentPage = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetDate = () => {
    setFromDate("")
    setToDate("")
  }
  //-----------------------------------------------------------------------------------------------

  const handleFromDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate > currentDate) {
      alert('From date cannot be beyond current date');
    } else if (selectedDate && toDate && new Date(selectedDate) >= new Date(toDate)) {
      alert('From date must be earlier than To date');
    } else {
      setFromDate(selectedDate);
    }
  };

  const handleToDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate > currentDate) {
      alert('To date cannot be beyond current date');
    } else if (fromDate && selectedDate && new Date(fromDate) >= new Date(selectedDate)) {
      alert('To date must be later than From date');
    } else {
      setToDate(selectedDate);
    }
  };



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
      <div className="flex h-[56px] w-full space-x-4">
        <div className="hidden h-full rounded-lg border border-transparent bg-bgray-100 px-[18px] focus-within:border-success-300 dark:bg-darkblack-500 sm:block sm:w-70 lg:w-88">
          <div className="flex h-full w-full items-center space-x-[15px]">
            <span>
              <svg
                className="stroke-bgray-900 dark:stroke-white"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.80204"
                  cy="10.6761"
                  r="8.98856"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0537 17.3945L19.5777 20.9094"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <label htmlFor="listSearch" className="w-full">
              <input
                type="text"
                id="listSearch"
                placeholder="Search by name, email, or others..."
                className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="hidden h-full rounded-lg border border-transparent bg-bgray-100 px-[18px] focus-within:border-success-300 dark:bg-darkblack-500 sm:block sm:w-70 lg:w-88">
          <div className="flex h-full w-full items-center space-x-[15px]">
            <select
              className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"

              onChange={(e) => setTypeofTransaction(e.target.value)}>
              <option value="">Type Of transaction</option>
              <option value="Game">Game</option>
              <option value="Payment">Payment</option>
              <option value="Admin">Admin</option>
              <option value="Bonus">Bonus</option>
              <option value="Refund">Refund</option>
              <option value="Referral">Referral</option>
              <option value="other">other</option>
            </select>

          </div>
        </div>


        <div className="hidden h-full rounded-lg border border-transparent bg-bgray-100 px-[18px] focus-within:border-success-300 dark:bg-darkblack-500 sm:block sm:w-70 lg:w-88">
          <div className="flex h-full w-full items-center space-x-[15px]">


            <select
              className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"

              onChange={(e) => setSearchTerm(e.target.value)}>
              <option value="">Transaction status</option>
              <option value="Success">Success</option>
              <option value="Pendding">Pendding</option>
              <option value="Failed">Failed</option>
            </select>

          </div>
        </div>

      </div>

      <div className="filter-content w-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">

          <input
            type="date"
            placeholder="From Date"
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <input
            type="date"
            placeholder="To Date"
            value={toDate}
            onChange={handleToDateChange}
            style={{ marginLeft: "1rem" }}
          />
          <button aria-label="none"
            className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm" onClick={resetDate}>Reset</button>

         
        </div>
      </div>
      <div className="text-center table-content w-full overflow-x-auto">
        <table className="table-fixed hover:border-collapse text-center w-full">
          <tbody>
            <tr className="border-b border-bgray-300 dark:border-darkblack-400">
              <td className="w-[195px] px-6 py-5 xl:px-0">

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Order Id
                </span>

              </td>
              <td className="w-[185px] px-6 py-5 xl:px-0">

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
              
                  User Name
                </span>

              </td>
              <td className="w-[125px] px-6 py-5 xl:px-0" onClick={() => handleSort('transAmount')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  transAmount ⬆⬇
                </span>
              </td>

              <td className="w-[110px] px-6 py-5 xl:px-0" onClick={() => handleSort('winningChips')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Win Wallet ⬆⬇
                </span>
              </td>

              <td className="w-[110px] px-6 py-5 xl:px-0" onClick={() => handleSort('chips')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Main Wallet⬆⬇
                </span>
              </td>

              <td className="w-[110px] px-6 py-5 xl:px-0" onClick={() => handleSort('bonusChips')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Bonus Wallet ⬆⬇
                </span>
              </td>

              <td className="w-[130px] px-6 py-5 xl:px-0" onClick={() => handleSort('referralChips')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  referral Wallet ⬆⬇
                </span>
              </td>

              <td className="w-[110px] px-6 py-5 xl:px-0" onClick={() => handleSort('totalBucket')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Total Wallet ⬆⬇
                </span>
              </td>

              <td className="w-[160px] px-6 py-5 xl:px-0" onClick={() => handleSort('createdAt')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Registration Date ⬆⬇
                </span>
              </td>
              <td className="w-[110px] px-6 py-5 xl:px-0" onClick={() => handleSort('transType')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  transType ⬆⬇
                </span>
              </td>
              <td className="w-[150px] px-6 py-5 xl:px-0" onClick={() => handleSort('transTypeText')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  transTypeText ⬆⬇
                </span>
              </td>

              <td className="w-[70px] px-6 py-5 xl:px-0" onClick={() => handleSort('gameId')}>

                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  gameId ⬆⬇
                </span>
              </td>


            </tr>


            {usersOnCurrentPage?.map((user, index) =>
              pageSize
                ? index + 1 <= pageSize && (
                  <CustomerInfo
                    key={user._id}
                    OrderId={user._id}
                    UserId={user.uniqueId}
                    transAmount={user.transAmount}
                    winningChips={user.winningChips != undefined ? user.winningChips.toFixed(2) : "0"}
                    chips={user.chips != undefined ? user.chips.toFixed(2) : "0"}
                    bonusChips={user.bonusChips != undefined ? user.bonusChips.toFixed(2) : "0"}
                    referralChips={user.referralChips != undefined ? user.referralChips.toFixed(2) : "0"}
                    totalBucket={user.totalBucket != undefined ? user.totalBucket.toFixed(2) : "0"}
                    createdAt={user.createdAt}
                    transType={user.transType}
                    transTypeText={user.transTypeText}
                    gameId={user.gameId}
                    uid={user.userId}
                  />
                )
                : index < 3 && (
                  <CustomerInfo
                    key={user._id}
                    OrderId={user._id}
                    UserId={user.uniqueId}
                    transAmount={user.transAmount}
                    winningChips={user.winningChips != undefined ? user.winningChips.toFixed(2) : "0"}
                    chips={user.chips != undefined ? user.chips.toFixed(2) : "0"}
                    bonusChips={user.bonusChips != undefined ? user.bonusChips.toFixed(2) : "0"}
                    referralChips={user.referralChips != undefined ? user.referralChips.toFixed(2) : "0"}
                    totalBucket={user.totalBucket != undefined ? user.totalBucket.toFixed(2) : "0"}
                    createdAt={user.createdAt}
                    transType={user.transType}
                    transTypeText={user.transTypeText}
                    gameId={user.gameId}
                    uid={user.userId}
                  />
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination-content w-full">
        <div className="flex w-full items-center justify-center lg:justify-between">
          <div className="hidden items-center space-x-4 lg:flex">
            <span className="text-sm font-semibold text-bgray-600 dark:text-bgray-50">
              Show result:
            </span>
            <div className="relative">
              <button
                aria-label="none"
                onClick={() => setActive(!active)}
                type="button"
                className="flex items-center space-x-6 rounded-lg border border-bgray-300 px-2.5 py-[14px] dark:border-darkblack-400"
              >
                <span className="text-sm font-semibold text-bgray-900 dark:text-bgray-50">
                  {pageSize}
                </span>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
                      stroke="#A0AEC0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id="result-filter"
                style={{ display: active ? "block" : "none" }}
                className="absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <ul>
                  {[5, 10, 20, 25, 50].map((item) => (
                    <li
                      key={item}
                      onClick={() => Dropdown(item)}
                      className="text-bgray-90 cursor-pointer px-5 py-2 text-sm font-medium hover:bg-bgray-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 sm:space-x-[35px]">
            <button aria-label="none" type="button" onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-sm font-semibold text-bgray-600 dark:text-bgray-50"
            >
              Previous
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
                    stroke="#A0AEC0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <button aria-label="none" type="button" onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-sm font-semibold text-bgray-600 dark:text-bgray-50"
            >
              Next
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
                    stroke="#A0AEC0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

PlayerTab.propTypes = {
  pageSize: ProtoTypes.number,
};

export default PlayerTab;
