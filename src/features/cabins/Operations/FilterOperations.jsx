/* eslint-disable react/prop-types */
function FilterOperations({ setOptionCheck, optionCheck }) {
  function handleSetOption() {
    console.log(optionCheck);
  }
  const optionStyle = "text-[#4338ca] h-4 bg-white";
  return (
    <>
      <select
        value={optionCheck}
        onChange={(e) => setOptionCheck(e.target.value)}
        onClick={(e) => handleSetOption(e.target.value)}
        className="px-4 py-3 outline-none
     border-2 border-gray-300 rounded-lg
      focus:border-[#4338ca]"
      >
        <option value="all_cabins" className={`${optionStyle}`}>
          All cabins
        </option>
        <option value="with_discount" className={`${optionStyle}`}>
          With discount
        </option>
        <option value="no_discount" className={`${optionStyle}`}>
          No discount
        </option>
      </select>
    </>
  );
}

export default FilterOperations;
