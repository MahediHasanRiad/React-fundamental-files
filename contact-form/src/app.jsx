import React, { useState } from "react";
import Form from "./component/form";
import Filter from "./component/filter";

const App = () => {

    const [formData, setFormData] = useState([])

    function getData(data){
        setFormData([].concat(formData, data))
    }

    return(
        <div>
            <Form getData={getData}/>
            <Filter formData={formData}/>
        </div>
    )
}

export default App