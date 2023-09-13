import {useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {getCabins} from "../services/apiCabins.js";


function Cabins() {
    // const [dataFetch , setDataFetch] = useState();

    useEffect(() => {
        const fetchData = async ()=>{
            const res = await getCabins();
            console.log(res)
        }

        fetchData();
    }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>

      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
