import { useEffect, useRef, useState } from "react"
import './scroll.css';

const Scroll = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const fetchRef = useRef(false)

    const fetchData = async () => {
        try {

            fetchRef.current = true;
            setLoading(true);
            const response: any = await fetch(`https://jsonplaceholder.typicode.com/photos?page=${page}`);
            console.log("fetching the data")
            const data: any = await response.json();
            console.log(data)
            // @ts-ignore
            setData(prev => [...data?])
            fetchRef.current = false;
            setLoading(false)

        } catch (error: any) {
            console.log(error.message)
        }
    }

    const loadMore = () => {
        if (fetchRef.current ) return;
        const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
        const remaining = scrollHeight - (clientHeight + scrollTop);

        if (remaining <= 0) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {

        fetchData()

    }, [page])

    useEffect(() => {

        window.addEventListener('scroll', loadMore)

        return () => {
            window.removeEventListener('scroll', loadMore)
        }

    }, [])

  return (
    <>
        <h1 style={{
            textAlign: 'center'
    }} > These are the Items </h1>
    <div className="main-container"  >
        

        {
            data && data.map((item: any) => {
                return <div key={item?.id} className="item-container">
                    <img src={item?.thumbnail} height='100px' width="100px" alt="product_image" />
                    <h3> Id: {item?.id} </h3>
                    <h3> Id: {item?.title} </h3>
                </div>
            })
        }


    </div>
    {
        loading && <h2 style={{
            marginBottom: '5px',
            textAlign: 'center'
        }} > Loading... </h2>
    }
    </>
  )
}

function wait(time: any) {
    return new Promise((resolve: any) => {
        setTimeout(resolve, time)
    })
}

export default Scroll