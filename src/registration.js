import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Registration() {

  const [firstName, setFirstName] = useState('Abdul')
  const [surname, setSurName] = useState('Ghafoor')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submitRegistration, setSubmitRegistration] = useState(false)
  const navigate = useNavigate();

    const onTextFieldChange = (e) => {
      console.log(e.target.name);

      if (e.target.name === 'fName') {
        setFirstName(e.target.value);
      } else if (e.target.name === 'surname') {
        setSurName(e.target.value)
      } else if (e.target.name === 'email') {
        setEmail(e.target.value)
      } else if (e.target.name === 'password') {
        setPassword(e.target.value)
      }
    }

    const onChangeFirstname = (e) => {
      setFirstName(e.target.value);
    }

    const handleRegister = async (e) => {
      console.log('submit button pressed.')
      console.log(firstName);
      console.log(surname);
      console.log(email);
      console.log(password);

      if (firstName && surname && email && password) {
        setSubmitRegistration(true)
        console.log(' proceed to submit to server and register a user');

        try {
          const response = await axios.post('http://localhost:3000', {
            firstName,
            surname,
            email,
            password
          })

          console.log(response);
        } catch(err) {
          console.log('error executing the request', err);
        }
      }
    };


    console.log('i am going to print firstname');
    console.log(firstName);

    console.log(' surname values are ');
    console.log(surname);

    if (submitRegistration) {
      // navigate('/', {state: {message: 'success'}});
      return (<div><div> Registration submit successfully </div><div> <Link to="/Login">Login Now</Link></div></div>)
    }

    return (<div className="block"> 
    <form>
            <h1>Registration Form </h1>
            <label>First Name </label><br />
            <input name="fName" type="text" placeholder="Husnain" onChange={onChangeFirstname} value={firstName} /><br />
            <label>Surname </label><br />
            <input name="surname" type="text" placeholder="Mahoon" onChange={onTextFieldChange} value={surname} /> <br />
            <label>Email</label> <br />
            <input name="email" type="email" placeholder="Email" onChange={onTextFieldChange} value={email} /> <br />
            <label>Password</label><br />
            <input name="password" type="password" placeholder="*******" onChange={onTextFieldChange} />
            <input type="button" onClick={handleRegister} name="submit" value="Submit" />
          </form> 
          <div> <Link to="/Login">I am already a member</Link></div>
          
     
    </div>)
}