import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Error404(){
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        const idTimeout = setTimeout(()=>{
            navigate('/');
        }, 5000);
        console.log(idTimeout);

        const idInterval = setInterval(()=>{
            setTimer((prevTimer)=> prevTimer -1)
        }, 1000)

        return() =>{
            clearTimeout(idTimeout);
            clearTimeout(idInterval);
        }
    }, [navigate])

    return (
        <>
            <p>404 Not Found</p>
            <Link to="/">Volver al Home</Link>
        </>
    )
}

export default Error404;