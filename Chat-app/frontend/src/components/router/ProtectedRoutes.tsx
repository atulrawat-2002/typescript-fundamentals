import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import Login from "./Login";

function ProtectedRoutes() {

    const [auth, setAuth] = useState(true);

    // useEffect(() => {
    //    setTimeout(() => {
    //      setAuth(prev => !prev)
    //    }, 2000);
    // }, [])

  return (
    <>

    {
        auth ? <Outlet /> : <Login />
    }

    </>
  )
}

export default ProtectedRoutes