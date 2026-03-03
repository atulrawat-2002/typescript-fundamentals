import { useEffect, useState } from "react"
import '../../App.css';

function Pagination() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 200;
    
    useEffect(() => {

            fetch(`https://dummyjson.com/users?${limit}=200`)
            .then(response => response.json())
            .then(result => setData(result?.users));
            console.log(data);

    }, [limit])

    const PAGE_SIZE = 10;
    let start = currentPage * PAGE_SIZE; 
    let end = start + PAGE_SIZE;

  return (
    <>

    
        <div className="btn-container">
        <button disabled={currentPage === 0} className="action-btn" onClick={() => setCurrentPage(prev => prev - 1)} > ◀️ </button>
            { [...Array(21).keys()].map(val => {
            return <button className={`${currentPage === val && "active"}`} onClick={() => setCurrentPage(val)} > {val} </button>
        }) }
        <button  disabled={currentPage === 20} className="action-btn"  onClick={() => setCurrentPage(prev => prev + 1)} > ▶️ </button>
        </div>


    <div className="main-container" >


        {
            data.slice(start, end).map((user: any) => {
                return <div className="item-container" key={user?.id} >
                    <img src={user?.image} height="100px" width="100px" alt="user_imaage" />
                    <h3> {user?.firstName} </h3>
                    <h3> {user?.lastName} </h3>
                    <h3> {user?.age} </h3>
                    <h3> {user?.gender} </h3>
                </div>
            })
        }

    </div>

    </>
  )
}

export default Pagination