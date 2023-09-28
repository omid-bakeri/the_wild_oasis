/* eslint-disable react/prop-types */
function FilterBookings({ filterBookings, setFilterBookings }) {
  function handleSetOption() {}
  const optionStyle = "text-[#4338ca] h-4 bg-white";
  return (
    <>
      <select
        value={filterBookings}
        onChange={(e) => setFilterBookings(e.target.value)}
        onClick={(e) => handleSetOption(e.target.value)}
        className="px-4 py-3 outline-none
        border-2 border-gray-300 rounded-lg
      focus:border-[#4338ca]"
      >
        <option value="all_bookings" className={`${optionStyle}`}>
          All Bookings
        </option>
        <option value="checked_in" className={`${optionStyle}`}>
          Status (CHECKED IN)
        </option>
        <option value="checked_out" className={`${optionStyle}`}>
          Status (CHECKED OUT)
        </option>
        <option value="unconfirmed" className={`${optionStyle}`}>
          Status (UNCONFIRMED)
        </option>
      </select>
    </>
  );
}

export default FilterBookings;
