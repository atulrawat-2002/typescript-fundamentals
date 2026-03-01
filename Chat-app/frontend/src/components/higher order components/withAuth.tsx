import { useState } from "react";

function withAuth(Component: any) {
    // validation
    const [auth, setAuth] = useState(false);

    return function(props: any) {
        if (auth) {
            return <>

                <Component {...props} />
                <button onClick={() => setAuth(prev => !prev)} > Log out </button>

            </>
        } else{
            return <>

                 <h2> Please Login! </h2>
                 <button onClick={() => setAuth(prev => !prev)} > Login </button>

            </>
        }
    }

}


export default withAuth;