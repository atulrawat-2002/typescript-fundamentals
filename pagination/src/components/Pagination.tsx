import { useEffect, useState } from "react"
import '../App.css';

function Pagination() {

    const [data, setData] = useState([]);
    const [pageNumber, setPagNumber] = useState(0);
    
    useEffect(() => {
        
        try {
            
            fetch('https://dummyjson.com/products?limit=200')
            .then((response) => response.json())
            .then((result) => setData(result.products));
            
        } catch (error) {
            console.log(error);
        }
        
    }, [])
    
    const PAGE_SIZE = 10;

    let start = pageNumber * PAGE_SIZE;
    let end = start + PAGE_SIZE;

  return (
    <>
    <h2> Pagination in Reactjs </h2>

    <div  className="button-container" onClick={() => setPagNumber(prev => prev - 1)} >

    <button disabled={pageNumber === 0} className="pagination-button" > ◀ </button>

    {[...Array(20).keys()].map((val) => {
        return <button key={val} className={`pagination-button ${val === pageNumber ? "active" : ""}`} onClick={() => setPagNumber(val)} > {val} </button>
    })}
    <button disabled={pageNumber === 19} className="pagination-button" onClick={() => setPagNumber(prev => prev + 1)} > ▶ </button>
    </div>

    <div className="container"  >

        {
            data.slice(start, end).map((item: any) => {
                return <div className="image-container" key={item?.id}>
                    <h3> {item?.title} </h3>
                    <img src={item?.thumbnail} height='120px' width='120px' alt="image"  />
                </div>
            })
        }

    </div>
    </>
  )
}

export default Pagination