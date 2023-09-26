/* eslint-disable react/prop-types */

import optionStyle from "./FilterOperations";

function SortOperations({ sortElement, setSortElement }) {
  function handleSortELement() {}
  return (
    <>
      <select
        value={sortElement}
        onChange={(e) => setSortElement(e.target.value)}
        onClick={() => handleSortELement()}
        className="px-4 py-3 outline-none
 border-2 border-gray-300 rounded-lg
  focus:border-[#4338ca]"
      >
        <option value="default" className={`${optionStyle}`}>
          Default
        </option>
        <option value="sort_by_price" className={`${optionStyle}`}>
          Sort by price
        </option>
        <option value="sort_by_capacity" className={`${optionStyle}`}>
          Sort by capacity
        </option>
        <option value="sort_by_discount" className={`${optionStyle}`}>
          Sort by discount
        </option>
      </select>
    </>
  );
}

export default SortOperations;
