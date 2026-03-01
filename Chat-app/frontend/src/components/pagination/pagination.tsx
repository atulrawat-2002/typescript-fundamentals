import { useEffect, useState } from "react";
import './pagination.css'

function Pagination() {

    const [productData, setProductData] = useState([]);
    const [currrentPage, setCurrentPage] = useState(0);

    function handlePageChange(val: any) {

    }

    useEffect(() => {

        fetch('https://dummyjson.com/products?limit=200')
        .then(response => response.json())
        .then(result => setProductData(result.products));

    }, [])
    
    const start = currrentPage * 10;
    const end = (currrentPage + 1) * 10;
    const PAGE_SIZE = 10;

    return <>
    
    <h2>Products</h2>

        <div style={{
            textAlign: 'center'
        }} > 
         
         <button disabled={ currrentPage === 0 } style={{
                padding: '4px',
                margin: '1px'
            }}  onClick={() => setCurrentPage(prev => prev - 1)} > ◀️ </button>

        {[...Array(20).keys()].map(val => {
            return <button onClick={() => setCurrentPage(val)} key={val} style={{
                padding: '4px',
                margin: '1px',
                cursor: 'pointer',
                border: '1px solid black'
            }} className={currrentPage === val ? "active" : ""} > {val} </button>
        })}

        <button disabled={ currrentPage === 19 } style={{
                padding: '4px',
                margin: '1px'
            }} onClick={() => setCurrentPage(prev => prev + 1)}  > ▶️ </button>

     </div>


        <div className="page-container" >
            {
            productData.slice(start, end).map((product: any) => {
                return <div key={product?.id} className="item-container" >
                    <h3> {product?.title} </h3>
                    <img src={product?.thumbnail} height="100px" width="100px" alt="Product_image" />
                </div>
            })
        }

        </div>

    </>
}


export default Pagination;