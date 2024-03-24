import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Image from "./Image";
import { Link } from "react-router-dom";
const intialValue = {
  name: "",
  email: "",
  password: "",
  date: "",
};
const Home = () => {

  const [data, setData] = useState(intialValue);
  const[user, setUser]= useState([])
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(data)
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    // validation logic
    const { name, email, date, password } = data;

if (name === "") {
  alert("Please Enter Your Name");
} else if (email === "" || !email.includes("@")) {
  alert("Please Enter a Valid Email"); 
} else if (date === '') {
  alert("Please Enter Date");
} 
else if(password===""){
    alert("Password Required")
}
else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
  alert("Password must contain at least one uppercase letter, one lowercase letter, and one special character.");
}
else if(password.length<5){
    alert("Password Length should be Greater then 5")
}
else{
    // console.log("Submitted Sucessfull", data)
    localStorage.setItem("authdata", JSON.stringify([...user, data]))
}

    
  }
  return (
    <>
   
   <div class="container mt-5">
  <section class="d-flex justify-content-between flex-lg-row flex-column-reverse align-items-center">
    <div class="left col-lg-5">
      <div class="text text-center mb-3">Sign Up</div>
      <form>
        <div class="mb-3" controlId="name">
          <input type="text" class="form-control" onChange={getData} name="name" placeholder="Enter Your Name" />
        </div>
        <div class="mb-3" controlId="email">
          <input type="email" class="form-control" onChange={getData} name="email" placeholder="Enter Your Email" />
        </div>
        <div class="mb-3" controlId="date">
          <input type="date" class="form-control" onChange={getData} name="date" />
        </div>
        <div class="mb-3" controlId="password">
          <input type="password" class="form-control" onChange={getData} name="password" placeholder="Enter Your Password" />
        </div>
        <button type="submit" class="btn btn-primary col-lg-6" onClick={handleSubmit}>Submit</button>
      </form>
      <p class="mt-4">Already Have an Account <span><a href="/login">Login</a></span></p>
    </div>
    <div class="d-none d-lg-block col-lg-6">
      <Image />
    </div>
  </section>
</div>

</>
  );
};

export default Home;
