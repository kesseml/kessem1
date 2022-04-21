import car_logo from './Car_Logo.svg';
import location_icon from './Outline.svg';
import time_icon from './watch.svg';
import users_icon from './users.svg';
import TimePicker from 'react-time-picker';
import {useState, useEffect} from "react";

import './App.css';
import {useForm} from "react-hook-form";

function App() {


    const [selects,setSelects] =useState();
    const initialValues = {username: "",phone: "", address: "", leavingTime:"", freeSeats:0 };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({}); //when click on submit - go to this function
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => { //error function
        // console.log(e.target);
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
        };

    const handleSubmit = (e) => { //when click on add ride

        e.preventDefault(); //without refresh
        setFormErrors(validate(formValues)); //send to error check //return true or false - from function
        let haveErrors = validate(formValues); //save
        if(!haveErrors){ // check for errors . enter if false
            console.log(formValues); //PRINT VALUES
            return alert("successfuly created ride");
            //API CALL TO DATABASE - FOR THE MAIN SCREEN
        }
        // setIsSubmit(true); //make submit - true
    };

    const handleClockChange = (e) => {
         setFormValues({...formValues, leavingTime:e});
    }

    // useEffect(() => { // check if no error and submit is clicked
    //     console.log(formErrors)
    // if(Object.keys(formErrors).length === 0 && isSubmit) {
    //     console.log(formValues)
    // }
    // }, [formErrors]);

    const validate = (value) => {
        const errors = {}
        let isError = false;
        if (!value.username) {
            errors.username = "Full name is required!";
            isError = true;
         if (!value.phone) {
             errors.phone = "Phone number  is required!";
             isError = true;
         }
        if (!value.address) {
            errors.address = "Address is required!";
            isError = true;
        }
        console.log(errors);
        return isError;
        }
    };

    return (
    <div className="App">
        {/*{Object.keys(formErrors).length === 0 && isSubmit ? (*/}
        {/*    <div className="success message">Signed in successfully</div>*/}
        {/*    ) : (*/}
        {/*<pre> {JSON.stringify(formValues, undefined, 2)} </pre>*/}
        {/*    )}*/}

      <header className="header">
          <h1 id="header-text"> Offer a ride</h1>
          <img src={car_logo} id="car-logo" alt="logo" />
      </header>

        <section className="info">
            <form onSubmit={handleSubmit}>

                {/*<p>{formErrors.username}</p>*/}
            <input id="full-name" type="text" name="username" placeholder="Full name"
                   value={formValues.username} onChange={handleChange} />

                {/*<p>{formErrors.phone}</p>*/}
            <input id="phone-number" type="text" name="phone" placeholder="Phone number"
                   value={formValues.phone} onChange={handleChange}/>

                {/*<p>{formErrors.address}</p>*/}
            <div className="leaving">
                <img className="icon" src={location_icon} alt="icon"/>
                <p className="text_info">leaving from</p>
                <input className="input" type="text" name="address" placeholder ="Address"
                       value={formValues.address} onChange={handleChange}/>
            </div>

            <div className="At">
                {/*<img className="icon" src={time_icon} alt="icon"/>*/}
                <p className="text_info">At</p>
                <TimePicker onChange={handleClockChange} value={formValues.leavingTime} />
            </div>

            <div className="spots">
                <img className="icon" src={users_icon} alt="icon"/>
                <p className="text_info">Free spots in my car</p>
                <select name={"freeSeats"} onChange={handleChange} value={formValues.freeSeats}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
            </div>
            <label id="comment">Comment for riders</label>
            <input id="comment-input" type="text" placeholder= "Let your riders know what&#13;&#10; time you plan to leave and other important information"/>
            <input id="button" type="submit" value="Add Ride"/>
            </form>

        </section>

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
    </div>
  );
}
export default App;
