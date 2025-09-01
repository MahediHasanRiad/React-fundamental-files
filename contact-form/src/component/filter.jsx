import React, { useState } from "react";

function Filter({ formData }){

    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')

    let storeFilter = []
    if(filter === 'all'){
        storeFilter = formData
    }else{
        storeFilter = formData.filter(data => data.group === filter)
    }

    if(search !== ''){
        // storeFilter = storeFilter.filter(data => data.name === search)
        storeFilter = storeFilter.filter(data => data.name.includes(search) || data.email.includes(search))
    }

    

    const filterHandler = (e) => {
        setFilter(e.target.value)
    } 

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
   
    return(
        <>
           <select name="filter" id="filter" value={filter} onChange={filterHandler}>
                <option value="">Select</option>
                <option value="all">All</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
                <option value="">None</option>
           </select>
           <input type="search" placeholder="find by name......" value={search} onChange={searchHandler} />
           <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeFilter.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.group}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
        </>
    )
}

export default Filter