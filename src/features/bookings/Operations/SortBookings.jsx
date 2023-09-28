/* eslint-disable react/prop-types */
function SortBookings({ sortBookings, setSortBookings }) {
  function handleSortELement() {}
  const optionStyle = "text-[#4338ca] h-4 bg-white";

  return (
    <select
      value={sortBookings}
      onChange={(e) => setSortBookings(e.target.value)}
      onClick={() => handleSortELement()}
      className="px-4 py-3 outline-none
border-2 border-gray-300 rounded-lg
focus:border-[#4338ca]"
    >
      <option value="default" className={`${optionStyle}`}>
        Default
      </option>
      <option value="sort_by_amount(high)" className={`${optionStyle}`}>
        Sort by Amount (high first)
      </option>
      <option value="sort_by_amount(low)" className={`${optionStyle}`}>
        Sort by Amount (low first)
      </option>
      <option value="sort_by_guests(username)" className={`${optionStyle}`}>
        Sort by guests (username)
      </option>
      <option value="sort_by_guests(email)" className={`${optionStyle}`}>
        Sort by guests (email)
      </option>
      {/* <option value="sort_by_date(earlier)" className={`${optionStyle}`}>
        Sort by date (earlier first)
      </option>
      <option value="sort_by_date(recent)" className={`${optionStyle}`}>
        Sort by date (recent first)
      </option> */}
    </select>
  );
}

export default SortBookings;
