import "./landing.css";

const Landing =  () => {
  const handlePayment = async () => {

    const response = await fetch('http://localhost:8000/payments/create', {
      method: 'POST'
    })
    const result = await response.json();
    const { key, order } = result;
    const { amount, attempts, currency, id, notes } = order
    console.log(key, amount, attempts, currency, id, notes)

    let options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: currency,
      name: "Atul Rawat", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: notes,
      theme: {
        color: "#3399cc",
      },
    };

    let rzp1 = new window.Razorpay(options);
      rzp1.open();
  };

  return (
    <div className="main-container">
      <div className="container">
        <button className="action" onClick={handlePayment}>
          Make Payment
        </button>
        <button className="action"> cancle </button>
      </div>
    </div>
  );
};

export default Landing;
