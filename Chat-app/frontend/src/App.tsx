import Dashboard from "./components/higher order components/Profile";
import withAuth from "./components/higher order components/withAuth";
import withDarkmode from "./components/higher order components/withDarkmode";

function App() {

  const AuthDash = withAuth(Dashboard);
  const DarkModeedDash = withDarkmode(AuthDash);

  return <>

    <DarkModeedDash data={{ name: 'Atul' }} />

  </>
}



export default App;