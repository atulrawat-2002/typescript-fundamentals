import {  useState } from "react"

 
function Profile() {

  const [show, setShow] = useState(false)

  const user = undefined


  return (
    <div>


             {
              show &&  <h1> {user.name} </h1>
             }

             <button onClick={() => setShow(prev => !prev)} > Show name </button>

    </div>
  )
}

export default Profile