import { Link, Outlet, Route, Routes } from "react-router-dom";

import Store from "./Store";
// import { About } from "./About";
import { lazy, Suspense } from "react";


const Home = lazy(() => wait(2000).then(() => import('./Home')));
const About = lazy(() => {
    import('./About')
    .then(module => {
        return { module.About = default }
    })
})

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function NavBar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
        }}
      >
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/store"> Store </Link>
      </nav>
      <Suspense fallback={<h1>Loading....</h1>} >
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time:any) {
    return new Promise(res => setTimeout(() => res(true), time))
}

export default Routing;
