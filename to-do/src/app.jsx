import { useState } from "react";
import InputGroup from "./component/UI/input-group";
import Table from "./component/UI/table";

function App() {

    const [allData, setAllData] = useState([])
    const [editItem, setEditItem] = useState([])

    const getData = datas => {
        setAllData([].concat(allData, datas))
    }
    
  return (
    <div>
      <InputGroup getData={getData} />
      <Table allData={allData} setAllData={setAllData} />
    </div>
  );
}

export default App;
