import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logo-short.png";
import logoW from "../../assets/images/logo/logo-short-white.png";
import { useState } from "react";
function SidebarV2() {
  const [activeDashboard, setActiveDashboard] = useState(false);


  const [activebackandwhite, setActivebackandwhite] = useState(false);
  const [gamelist, setGamelist] = useState(false);
  const [activeaviator, setActiveaviator] = useState(false);

  const [payoutlist, setPayoutlist] = useState(false);

  const gamelistfunction = (flags) => {
    setGamelist(flags)
  }

  const backandwhitegame = (flags) => {


    setActivebackandwhite(flags)
    setGamelist(true)
    console.log("gamelist ::::::::::::::::::::::::::", gamelist)
  }


  const { pathname: location } = useLocation();
  return (
    <aside className="relative hidden w-[96px] bg-white  dark:bg-darkblack-600 sm:block">
      <div className="sidebar-wrapper-collapse relative top-0 z-30 w-full">
        <div className="sidebar-header sticky top-0 z-20 flex h-[108px] w-full items-center justify-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] bg-white dark:border-darkblack-500 dark:bg-darkblack-600">
          <Link to="/dashboard">
            <img src={logo} className="block dark:hidden" alt="logo" />
            <img src={logoW} className="hidden dark:block" alt="logo" />
          </Link>
        </div>
        <div className="sidebar-body w-full pt-[14px]">
          <div className="flex flex-col items-center">
            <div className="nav-wrapper mb-[36px]">
              <div className="item-wrapper mb-5">
                <ul className="mt-2.5 flex flex-col items-center justify-center">
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/dashboard"
                      className={`text-md inline-block py-1.5 font-medium text-red-600 hover:text-bgray-800 ${location.includes("dashboard")
                        ? "nav-active"
                        : location === "/"
                          ? "nav-active"
                          : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="path-1"
                            d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                            fill="#1A202C"
                          />
                          <path
                            className="path-2"
                            d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>

                  </li>
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/transaction"
                      className={`${location === "/transaction" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="item px-[43px] py-[11px]">

                    <span className="item-ico">
                      <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="path-1"
                          d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                          fill="#1A202C"
                        />
                        <path
                          className="path-2"
                          d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                          fill="#22C55E"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">
                      <li>
                        <Link
                          to="/kycmanagement?status=Pendding"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/kycmanagement?status=Pendding" ? "nav-active" : ""
                            } `}
                        >
                          Kyc Pendding
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/kycmanagement?status=Approved"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/kycmanagement?status=Approved" ? "nav-active" : ""
                            } `}
                        >
                          Kyc Approved
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/kycmanagement?status=Rejected"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/kycmanagement?status=Rejected" ? "nav-active" : ""
                            } `}
                        >
                          Kyc Rejected
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/gamehistory?gamename=rummy"
                      className={`${location === "/gamehistory?gamename=rummy" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/bankmanagement"
                      className={`${location === "/bankmanagement" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">

                    <span className="item-ico">
                      <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="path-1"
                          d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                          fill="#1A202C"
                        />
                        <path
                          className="path-2"
                          d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                          fill="#22C55E"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">
                      <li>
                        <Link
                          to="/gamehistory?gamename=rummy"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "gamehistory?gamename=rummy" ? "nav-active" : ""
                            } `}
                        >
                          Game History
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/TableEntry?gametype=pointrummy"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/TableEntry?gametype=pointrummy" ? "nav-active" : ""
                            } `}
                        >
                          Point Table Entry
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/TableEntry?gametype=dealrummy"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/TableEntry?gametype=dealrummy" ? "nav-active" : ""
                            } `}
                        >
                          Deal Table Entry
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/TableEntry?gametype=poolrummy"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/TableEntry?gametype=poolrummy" ? "nav-active" : ""
                            } `}
                        >
                          Pool Table Entry
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/botList"
                      className={`${location === "/botList" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>


                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/paymentConfig"
                      className={`${location === "/paymentConfig" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            className="path-1"
                            fill="#1A202C"
                          />
                          <circle
                            className="path-2"
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/paymentin"
                      className={`${location === "/paymentin" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            className="path-1"
                            fill="#1A202C"
                          />
                          <circle
                            className="path-2"
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/paymentout"
                      className={`${location === "/paymentout" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            className="path-1"
                            fill="#1A202C"
                          />
                          <circle
                            className="path-2"
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/socialurl"
                      className={`${location === "/socialurl" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            className="path-1"
                            fill="#1A202C"
                          />
                          <circle
                            className="path-2"
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/notificationlist"
                      className={`${location === "/notificationlist" ? "nav-active" : ""}`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 12.5C17.5 17.1944 13.6944 21 9 21C4.30558 21 0.5 17.1944 0.5 12.5C0.5 7.80558 4.30558 4 9 4C13.6944 4 17.5 7.80558 17.5 12.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99995 1.75C8.02962 1.75 7.09197 1.88462 6.20407 2.13575C5.80549 2.24849 5.39099 2.01676 5.27826 1.61818C5.16553 1.21961 5.39725 0.805108 5.79583 0.692376C6.81525 0.404046 7.89023 0.25 8.99995 0.25C10.1097 0.25 11.1846 0.404046 12.2041 0.692376C12.6026 0.805108 12.8344 1.21961 12.7216 1.61818C12.6089 2.01676 12.1944 2.24849 11.7958 2.13575C10.9079 1.88462 9.97028 1.75 8.99995 1.75Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/bannerlist"
                      className={`${location === "/bannerlist" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 12.5C17.5 17.1944 13.6944 21 9 21C4.30558 21 0.5 17.1944 0.5 12.5C0.5 7.80558 4.30558 4 9 4C13.6944 4 17.5 7.80558 17.5 12.5Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99995 1.75C8.02962 1.75 7.09197 1.88462 6.20407 2.13575C5.80549 2.24849 5.39099 2.01676 5.27826 1.61818C5.16553 1.21961 5.39725 0.805108 5.79583 0.692376C6.81525 0.404046 7.89023 0.25 8.99995 0.25C10.1097 0.25 11.1846 0.404046 12.2041 0.692376C12.6026 0.805108 12.8344 1.21961 12.7216 1.61818C12.6089 2.01676 12.1944 2.24849 11.7958 2.13575C10.9079 1.88462 9.97028 1.75 8.99995 1.75Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  


                  <li className="item px-[43px] py-[11px]">

                    <span className="item-ico">
                      <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="path-1"
                          d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                          fill="#1A202C"
                        />
                        <path
                          className="path-2"
                          d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                          fill="#22C55E"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">
                      <li>
                        <Link
                          to="/botconfiguration"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/botconfiguration" ? "nav-active" : ""
                            } `}
                        >
                          Bot Configuration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/paymentConfig"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/paymentConfig" ? "nav-active" : ""
                            } `}
                        >
                          Payment Configuration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gamelogic"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/gamelogic" ? "nav-active" : ""
                            } `}
                        >
                          Bonus Configuration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/matchmaking"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/matchmaking" ? "nav-active" : ""
                            } `}
                        >
                          MatchMaking Configuration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/statemanagement"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/statemanagement" ? "nav-active" : ""
                            } `}
                        >
                        State Management
                        </Link>
                      </li>
                    </ul>
                  </li>


                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarV2;


// <li className="item px-[43px] py-[11px]">
//                     <Link
//                       to="/security"
//                       className={`${location === "/security" ? "nav-active" : ""
//                         }`}
//                     >
//                       <span className="item-ico">
//                         <svg
//                           width="18"
//                           height="21"
//                           viewBox="0 0 18 21"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M17.5 12.5C17.5 17.1944 13.6944 21 9 21C4.30558 21 0.5 17.1944 0.5 12.5C0.5 7.80558 4.30558 4 9 4C13.6944 4 17.5 7.80558 17.5 12.5Z"
//                             fill="#1A202C"
//                             className="path-1"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M8.99995 1.75C8.02962 1.75 7.09197 1.88462 6.20407 2.13575C5.80549 2.24849 5.39099 2.01676 5.27826 1.61818C5.16553 1.21961 5.39725 0.805108 5.79583 0.692376C6.81525 0.404046 7.89023 0.25 8.99995 0.25C10.1097 0.25 11.1846 0.404046 12.2041 0.692376C12.6026 0.805108 12.8344 1.21961 12.7216 1.61818C12.6089 2.01676 12.1944 2.24849 11.7958 2.13575C10.9079 1.88462 9.97028 1.75 8.99995 1.75Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
//                             fill="#22C55E"
//                             className="path-2"
//                           />
//                         </svg>
//                       </span>
//                     </Link>
//                   </li>
// <li className="item px-[43px] py-[11px]">
// <Link
//   to="/noticetext"
//   className={`${location === "/noticetext" ? "nav-active" : ""
//     }`}
// >
//   <span className="item-ico">
//     <svg
//       width="18"
//       height="21"
//       viewBox="0 0 18 21"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
//         fill="#1A202C"
//         className="path-1"
//       />
//       <path
//         d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
//         fill="#22C55E"
//         className="path-2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
//         fill="#1A202C"
//         className="path-2"
//       />
//       <circle cx="9" cy="14" r="1" fill="#22C55E" />
//       <circle
//         cx="13"
//         cy="14"
//         r="1"
//         fill="#22C55E"
//         className="path-2"
//       />
//       <circle
//         cx="5"
//         cy="14"
//         r="1"
//         fill="#22C55E"
//         className="path-2"
//       />
//     </svg>
//   </span>
// </Link>
// </li>
// <li className="item px-[43px] py-[11px]">
// <Link
//   to="/mail"
//   className={`${location === "/mail" ? "nav-active" : ""
//     }`}
// >
//   <span className="item-ico">
//     <svg
//       width="18"
//       height="21"
//       viewBox="0 0 18 21"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0 6.5C0 4.29086 1.79086 2.5 4 2.5H14C16.2091 2.5 18 4.29086 18 6.5V8V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8V6.5Z"
//         fill="#1A202C"
//         className="path-1"
//       />
//       <path
//         d="M14 2.5H4C1.79086 2.5 0 4.29086 0 6.5V8H18V6.5C18 4.29086 16.2091 2.5 14 2.5Z"
//         fill="#22C55E"
//         className="path-2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V4C5.75 4.41421 5.41421 4.75 5 4.75C4.58579 4.75 4.25 4.41421 4.25 4V1C4.25 0.585786 4.58579 0.25 5 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V4C13.75 4.41421 13.4142 4.75 13 4.75C12.5858 4.75 12.25 4.41421 12.25 4V1C12.25 0.585786 12.5858 0.25 13 0.25Z"
//         fill="#1A202C"
//         className="path-2"
//       />
//       <circle cx="9" cy="14" r="1" fill="#22C55E" />
//       <circle
//         cx="13"
//         cy="14"
//         r="1"
//         fill="#22C55E"
//         className="path-2"
//       />
//       <circle
//         cx="5"
//         cy="14"
//         r="1"
//         fill="#22C55E"
//         className="path-2"
//       />
//     </svg>
//   </span>
// </Link>
// </li>