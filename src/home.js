import { Link } from "react-router-dom";
export default function Home() {
    return (
    <div>
        <h1> Wellcome</h1>
        <div> <Link to="/Registration">Create New Account</Link></div>
        <div> <Link to="/Login">Login Here</Link></div>
    </div>
    );
}