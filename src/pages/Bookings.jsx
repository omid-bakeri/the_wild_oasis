import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import FilterBookings from "../features/bookings/Operations/FilterBookings";
import { useState } from "react";
import SortBookings from "../features/bookings/Operations/SortBookings";
function Bookings() {
  const [filterBookings, setFilterBookings] = useState();
  const [sortBookings, setSortBookings] = useState();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <div
          className="flex px-4 py-2 
        items-center justify-center gap-10"
        >
          <SortBookings
            sortBookings={sortBookings}
            setSortBookings={setSortBookings}
          />
          <FilterBookings
            filterBookings={filterBookings}
            setFilterBookings={setFilterBookings}
          />
        </div>
      </Row>
      <Row>
        <BookingTable
          filterBookings={filterBookings}
          sortBookings={sortBookings}
          setSortBookings={setSortBookings}
        />
      </Row>
    </>
  );
}

export default Bookings;
