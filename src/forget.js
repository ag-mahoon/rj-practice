import { Link } from "react-router-dom";
export default function Forget(){
    return <div>
        <form>
        <h2>Forget Password</h2>
            <label> Enter Your Question anwer </label><br />
            <input type="test"  /><br />
            <label> enter new password </label><br />
            <input type="password"  /><br />
            <button> Submit</button>
<div> <Link to="/Login">Go to Login</Link></div>
        </form>
    </div>
}