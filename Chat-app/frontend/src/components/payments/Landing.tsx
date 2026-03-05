import './landing.css'


const Landing = () => {

    const handlePayment = () => {
        
    }

  return (
    <div className="main-container" >
      <div className="container">
        <button className="action" onClick={handlePayment} >Make Payment</button>
        <button className="action"> cancle </button>
      </div>
    </div>
  );
};

export default Landing;
