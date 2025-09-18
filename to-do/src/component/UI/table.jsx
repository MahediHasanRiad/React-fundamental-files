import { useEffect, useState } from "react"
import Button from "../style/button";
import Container from "../style/container";


function Table({ allData, setAllData }){
    const [tDatas, setTDatas] = useState(allData)

    useEffect(() => {
        setTDatas(allData)
    }, [allData])

    const deleteHandler = (id) => {
        let deleteItem = tDatas.filter(data => data.id !== id)
        setAllData(deleteItem)
    }

    const updateHandler = id => {
        const editItem = tDatas.filter(data => data.id === id)[0]
        
    }
    
    return(
        <Container>
            <table>
               <thead></thead>
               <tbody>
                 {tDatas.map(data => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td>
                            <Button onClick={() => updateHandler(data.id)}>UPDATE</Button>
                            <Button bg= 'delete' onClick={() => deleteHandler(data.id)}>DELETE</Button>
                        </td>
                    </tr>
                ))}
               </tbody>
            </table>
        </Container>
    )
}

export default Table