import ProtoTypes from "prop-types";

function CustomerInfo({ statename, users}) {
  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">
      
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {statename}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {users}
        </p>
      </td>
    </tr>
  );
}


export default CustomerInfo;
