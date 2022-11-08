import { useState } from "react";
import { useHistory } from "react-router-dom";

const [name, setName] = useState[""];
const [password, setPassword] = useState[""];
const [email, setEmail] = useState[""];
const history = useHistory()
async function SignUp() {
    let item = { name, password, email }
    console.log(item)
    let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        header: {
            "Content-type": 'aplication/json',
            "Accept": 'aplication/json'
        }
    })
    result = await result.JSON()
    localStorage.setItem("user-info", result, JSON.stringify(result))
    history.push("/add")
}
function Register() {

    return <div>
        <h1> Register Page</h1>
        <input type="text" value={name} onchange={(e) => setName(e.target.value)} className="input" />
        <br />
        <input type="password" value={password} onchange={(e) => setPassword(e.target.value)} className="input" />
        <br />
        <input type="text" value={email} onchange={(e) => setEmail(e.target.value)} className="input" />
        <button onClick={SignUp}>Sign Up</button>

    </div>
}
export default Register;
