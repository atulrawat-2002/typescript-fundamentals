import { useNavigate, useParams } from "react-router-dom"

function About() {

    const navigate = useNavigate();
    const obj = useParams();
    console.log(obj);

  return (
    <div>


    <button onClick={() => navigate('/?page=atul',{
        state: {
            name: 'Atul',
            age: 23,
            gender: 'male'
        },
        replace: true
    })} > Go home </button>

    </div>
  )
}

export default About