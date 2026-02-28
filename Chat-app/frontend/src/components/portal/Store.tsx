import { useState } from "react";
import { createPortal } from "react-dom";

function Store() {
  const [show, setShow] = useState(false);
  const modal = document.getElementById("modal");

  function hideModal() {
    setShow(false);
  }

  return (
    <h2 style={{ zIndex: "5", position: "relative" }}>
      Store is this
      <button onClick={() => setShow((prev) => !prev)}> Show Modal </button>
      {modal &&
        createPortal(
          <Modal hideModal={hideModal} show={show} data={"Oops womething went wrong"} />,
          modal,
        )}
    </h2>
  );
}
// @ts-ignore
export function Modal({ hideModal, show, data }) {
  return (
    <>
      {show && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: 'rgb(59, 60, 61, 0.8)',
            position: 'fixed',
            zIndex: '888',
            top: '0',
            left: '0',
            // opacity: '0.5'
          }}
        >
          <div
            style={{
              height: "400px",
              width: "400px",
              backgroundColor: "yellow",
              position: "fixed",
              top: "20%",
              zIndex: "1999",
              left: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "5px 5px 20px 10px grey",
            }}
          >
            <p> {data} </p>
            <button style={{padding: '10px'}} onClick={hideModal} > Hide </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Store;
