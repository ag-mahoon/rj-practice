import { Link } from "react-router-dom";
export default function Login() {
    return <div className="block"> 
    <form>
            <h1>Login Form </h1>
            <label>Email</label> <br />
            <input type="text" placeholder="Email" /> <br />
            <label>Password</label><br />
            <input type="password" placeholder="*******" />
          </form>
          <button>Login</button> 
          <div> <Link to="/Forget">Forget Password ???</Link></div>
          <div> <Link to="/Registration">Create New Account</Link></div>
     
    </div>
}