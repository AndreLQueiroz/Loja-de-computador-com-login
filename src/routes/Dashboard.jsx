import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Dashboard =()=>{

const navigate = useNavigate();

//criando a funçao handleLogout
const handleLogout=()=>{

    sessionStorage.removeItem("usuario")
    sessionStorage.removeItem("senha")
    alert("by by...")
    navigate("/");
}

    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>
            <CiLogout/>
        </button>
        </>
    )
}
export default Dashboard