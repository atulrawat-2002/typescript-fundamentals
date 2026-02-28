import { lazy, Suspense, useState } from 'react'
// import sum from './sum'

const Admin = lazy(() => import('./Admin'));

function Home() {

    const [isAdmin, setIsAdmin] = useState(false);

  return (
      <>
      <h1>Home</h1>
      <button className=" border-t-cyan-400 bottom-2" onClick={() => {
        import('./sum')
        .then((module) => alert(module.sum(2,3)))
      }} > add 2, 4 </button>
      <button onClick={() => setIsAdmin(prev => !prev)} > Toggle admin </button>
      { 

        isAdmin ? <Suspense fallback={<h2>Loading....</h2>} > <Admin /> </Suspense> : <h1>Not admin</h1>

      }
    </>

  )
}

export default Home