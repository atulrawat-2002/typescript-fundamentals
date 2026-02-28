import { createPortal } from "react-dom"
import { Modal } from "./Store.tsx"
import { useState } from "react"

function About() {

    const [show, setShow] = useState(false);
    const modal = document.getElementById('modal')


    function toggleModal() {
        setShow(prev => !prev)
    }

    

  return (
    <div style={{zIndex: '99', position: 'relative', backgroundColor: 'lime'}} >
        
    <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum neque animi, et quia est illum aperiam praesentium ullam delectus totam ipsam explicabo tenetur libero, unde accusamus. Fuga velit, quia perspiciatis autem consequuntur deleniti similique, nulla sunt quae placeat ipsa dicta eligendi nemo! Sed placeat fugit porro omnis ratione, quia eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo blanditiis sequi maiores dolor, voluptatem officia, iusto vero nam quam excepturi aperiam ipsum odit inventore. Nihil labore nemo voluptatum unde non iusto asperiores animi ratione dicta inventore quibusdam voluptates veritatis ad delectus quam praesentium exercitationem pariatur, placeat nobis autem! Incidunt, pariatur.</h3>

    <button onClick={toggleModal} > Show Modal </button>

    {
        show && modal && createPortal( <Modal hideModal={toggleModal} show={true} data={"This is not and error a message instead"} />,  modal)
    }

    </div>
  )
}

export default About